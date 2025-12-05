# Security Documentation

## Overview

This document outlines the security features and practices implemented in the Student Management System. The application follows OWASP security guidelines and implements multiple layers of security controls.

## Security Features Implemented

### 1. Authentication Security

#### Password Security
- **Hashing Algorithm**: bcrypt with 12 salt rounds
- **Password Requirements**:
  - Minimum 8 characters
  - At least 1 uppercase letter (A-Z)
  - At least 1 lowercase letter (a-z)
  - At least 1 number (0-9)
  - At least 1 special character (!@#$%^&*)

```typescript
// Implementation in lib/validators.ts
password: z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')
```

#### Account Lockout Protection
- **Failed Login Attempts**: Maximum 5 attempts
- **Lockout Duration**: 15 minutes
- **Implementation**: Tracked in database with `loginAttempts` and `lockedUntil` fields

```typescript
// Implementation in lib/auth.ts
if (user.lockedUntil && user.lockedUntil > new Date()) {
  throw new Error('Account is temporarily locked. Please try again later.')
}

// Increment on failed login
await prisma.user.update({
  where: { id: user.id },
  data: {
    loginAttempts: user.loginAttempts + 1,
    lockedUntil: user.loginAttempts >= 4 
      ? new Date(Date.now() + 15 * 60 * 1000)
      : undefined,
  },
})
```

#### Session Management
- **Technology**: JWT (JSON Web Tokens)
- **Cookie Settings**: httpOnly, secure (in production)
- **Session Duration**: 30 days
- **Secret Key**: Stored in environment variables

### 2. Authorization & Access Control

#### Role-Based Access Control (RBAC)
- **Roles**: ADMIN, STUDENT
- **Middleware Protection**: All protected routes verified at middleware level

```typescript
// middleware.ts
export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    if (path.startsWith('/admin') && token?.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }

    if (path.startsWith('/student') && token?.role !== 'STUDENT') {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }

    return NextResponse.next()
  }
)
```

#### API Route Protection
- **Server-side Validation**: Every API route checks session and role
- **Example**:

```typescript
const session = await getServerSession(authOptions)

if (!session || session.user.role !== 'ADMIN') {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
```

### 3. Input Validation & Sanitization

#### Validation Strategy
- **Library**: Zod schema validation
- **Location**: Both client and server-side
- **Approach**: Whitelist validation (only allow known good)

#### Examples

**User Registration**:
```typescript
const registerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).regex(...),
  role: z.enum(['ADMIN', 'STUDENT']),
})
```

**Course Creation**:
```typescript
const courseSchema = z.object({
  code: z.string().min(3).max(20),
  name: z.string().min(3).max(200),
  description: z.string().max(1000).optional(),
  credits: z.number().int().min(1).max(10),
  capacity: z.number().int().min(1).max(500),
})
```

### 4. SQL Injection Prevention

#### Prisma ORM
- **All database queries** use Prisma ORM
- **Parameterized queries** prevent SQL injection
- **No raw SQL** queries used

```typescript
// Safe from SQL injection
const user = await prisma.user.findUnique({
  where: { email: userEmail }  // Parameterized automatically
})

// Also safe - Prisma handles escaping
const courses = await prisma.course.findMany({
  where: {
    name: { contains: searchTerm }  // Safely parameterized
  }
})
```

### 5. Cross-Site Scripting (XSS) Prevention

#### React Auto-Escaping
- React automatically escapes all rendered content
- User-generated content is sanitized

#### Content Security Policy
- Implemented via Next.js configuration
- Restricts sources for scripts, styles, images

### 6. Cross-Site Request Forgery (CSRF) Protection

#### NextAuth.js Built-in Protection
- CSRF tokens automatically included in forms
- Verified on all state-changing requests (POST, PUT, DELETE)

### 7. Data Protection

#### Database Security
- **Connection**: SSL/TLS encrypted connection to Neon PostgreSQL
- **Password Storage**: Never stored in plaintext - always bcrypt hashed
- **Sensitive Data**: Environment variables for secrets

```env
# .env (not committed to git)
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="..."
```

#### Database Schema Security
- **Cascade Deletes**: Prevent orphaned records
- **Unique Constraints**: Prevent duplicate enrollments
- **Indexes**: Optimize query performance

```prisma
model Enrollment {
  @@unique([userId, courseId])  // Prevent duplicate enrollments
  @@index([userId])
  @@index([courseId])
}
```

### 8. Audit Logging

#### What's Logged
- All administrative actions (CREATE, UPDATE, DELETE)
- User information, action type, entity, timestamp
- Optional: IP address, user agent

```typescript
await createAuditLog(
  session.user.id,
  'DELETE',
  'COURSE',
  courseId,
  `Deleted course: ${course.code}`
)
```

#### Audit Log Schema
```prisma
model AuditLog {
  id        String   @id @default(cuid())
  userId    String
  action    String      // CREATE, UPDATE, DELETE
  entity    String      // COURSE, STUDENT, etc.
  entityId  String?
  details   String?
  ipAddress String?
  userAgent String?
  createdAt DateTime @default(now())
}
```

### 9. Error Handling

#### Secure Error Messages
- **Generic errors** shown to users
- **Detailed errors** logged server-side only
- **No stack traces** exposed in production

```typescript
try {
  // Database operation
} catch (error) {
  console.error('Detailed error:', error)  // Server logs only
  return NextResponse.json(
    { error: 'An error occurred' },  // Generic message to client
    { status: 500 }
  )
}
```

### 10. Additional Security Measures

#### Environment Variables
- Secrets never hardcoded
- `.env` file in `.gitignore`
- `.env.example` provided for setup

#### Secure Headers
- Configured via Next.js
- Includes: X-Frame-Options, X-Content-Type-Options, etc.

#### TypeScript
- Type safety prevents many runtime errors
- Compile-time checking reduces bugs

## OWASP Top 10 Coverage

| OWASP Risk | Mitigation |
|------------|-----------|
| A01: Broken Access Control | Role-based middleware, API route protection |
| A02: Cryptographic Failures | bcrypt hashing, TLS connection, secure cookies |
| A03: Injection | Prisma ORM parameterized queries |
| A04: Insecure Design | Defense in depth, security by default |
| A05: Security Misconfiguration | Environment variables, secure defaults |
| A06: Vulnerable Components | Regular dependency updates, no known CVEs |
| A07: Authentication Failures | Strong password policy, account lockout |
| A08: Data Integrity Failures | Input validation, audit logging |
| A09: Logging Failures | Comprehensive audit logging system |
| A10: SSRF | Not applicable (no external API calls) |

## Security Testing Performed

### Manual Testing
- ✅ SQL Injection attempts (malicious input in forms)
- ✅ XSS attempts (script tags in course descriptions)
- ✅ CSRF verification (invalid/missing tokens)
- ✅ Authorization bypass attempts (student accessing admin routes)
- ✅ Password validation edge cases
- ✅ Account lockout functionality
- ✅ Session expiration and invalidation

### Test Cases

#### 1. SQL Injection Test
```
Input: ' OR '1'='1
Expected: Safely handled by Prisma
Result: ✅ PASS - Query parameterized, no injection
```

#### 2. XSS Test
```
Input: <script>alert('XSS')</script>
Expected: Escaped and rendered as text
Result: ✅ PASS - React auto-escaping works
```

#### 3. Authorization Test
```
Action: Student user accessing /admin endpoint
Expected: Redirect to /unauthorized
Result: ✅ PASS - Middleware blocks access
```

#### 4. Password Strength Test
```
Input: "weak123"
Expected: Validation error
Result: ✅ PASS - Rejected for missing special char
```

## Security Best Practices

### For Developers
1. **Never commit** `.env` files
2. **Always validate** user input on server-side
3. **Use Prisma** for all database queries
4. **Check session** and role in API routes
5. **Log security events** for audit trail

### For Deployment
1. Set strong `NEXTAUTH_SECRET` (min 32 characters)
2. Enable HTTPS/TLS in production
3. Use secure database connection strings
4. Regular dependency updates
5. Monitor audit logs for suspicious activity

## Vulnerability Disclosure

If you discover a security vulnerability, please:
1. **Do not** create a public issue
2. Contact the development team directly
3. Provide detailed information
4. Allow time for fix before public disclosure

## Compliance

This application demonstrates compliance with:
- OWASP Secure Coding Practices
- GDPR principles (data minimization, access control)
- NIST password guidelines
- CWE/SANS Top 25 mitigations

## Regular Security Updates

- **Dependencies**: Check weekly for updates
- **Security Patches**: Apply immediately
- **Audit Logs**: Review monthly
- **Access Review**: Quarterly admin account review

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Prisma Security](https://www.prisma.io/docs/concepts/components/prisma-client/security)
- [NextAuth.js Docs](https://next-auth.js.org/getting-started/introduction)

---

**Last Updated**: December 2025  
**Version**: 1.0.0  
**Security Level**: Production-Ready

