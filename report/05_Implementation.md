# Implementation

## Technology Stack

The implementation was developed using modern web technologies selected for their security features and development efficiency:

- **Next.js 16**: React framework with built-in security, server-side rendering, and API routes
- **React 19**: UI library with automatic XSS protection through output escaping
- **TypeScript 5**: Type-safe programming language preventing common errors
- **Prisma ORM 5**: Type-safe database toolkit with parameterized queries
- **NextAuth.js 4**: Authentication library with secure session management
- **PostgreSQL (Neon)**: Serverless database with ACID compliance
- **Zod 4**: Schema validation library for runtime type checking
- **bcryptjs**: Password hashing library
- **Tailwind CSS 3**: Utility-first CSS framework

## Key Security Implementations

### 1. Password Security

```typescript
// Password hashing during registration
const hashedPassword = await bcrypt.hash(password, 12)

// Password verification during login
const isValid = await bcrypt.compare(inputPassword, user.password)
```

**Security Rationale**: bcrypt with 12 rounds provides strong protection against brute force attacks. Each round doubles computation time, making password cracking exponentially harder.

### 2. SQL Injection Prevention

```typescript
// Secure database query using Prisma ORM
const user = await prisma.user.findUnique({
  where: { email: validatedEmail }
})

// No raw SQL - all queries are parameterized
```

**Security Rationale**: Prisma ORM uses parameterized prepared statements, preventing SQL injection even if malicious input is provided. No raw SQL queries are exposed to user input.

### 3. Input Validation

```typescript
// Zod schema for user registration
const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be 8+ characters'),
  role: z.enum(['STUDENT', 'ADMIN'])
})

// Validation in API route
const validatedFields = registerSchema.safeParse(body)
if (!validatedFields.success) {
  return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
}
```

**Security Rationale**: Schema-based validation ensures type safety and catches malicious inputs before they reach the database or business logic.

### 4. Authorization Middleware

```typescript
// Protecting admin routes
export async function middleware(request: NextRequest) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (session.user.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }
  }
}
```

**Security Rationale**: Every protected route checks authentication and authorization, preventing unauthorized access at the middleware level.

### 5. Session Management

```typescript
// NextAuth.js configuration
session: {
  strategy: 'jwt',
  maxAge: 30 * 24 * 60 * 60, // 30 days
}

cookies: {
  sessionToken: {
    name: 'next-auth.session-token',
    options: {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production'
    }
  }
}
```

**Security Rationale**: JWT stored in httpOnly cookies prevents XSS attacks from accessing tokens. SameSite attribute prevents CSRF attacks.

### 6. XSS Prevention

React automatically escapes all output, preventing XSS attacks:

```typescript
// User input is automatically escaped
<div>{announcement.content}</div>

// No dangerouslySetInnerHTML without sanitization
```

**Security Rationale**: React's default behavior escapes HTML entities, preventing script execution from user input.

## CRUD Operations Implementation

### Create Operations
- **Courses**: Admin-only, validated input, capacity checks
- **Users**: Admin creates users, students self-register (STUDENT role only)
- **Enrollments**: Students enroll, validated against course capacity
- **Attendance**: Admin marks attendance, validated against enrollments

### Read Operations
- **Role-based filtering**: Students see only their data, admins see all
- **Optimized queries**: Prisma includes only necessary relations
- **Pagination**: Large datasets paginated for performance

### Update Operations
- **Ownership validation**: Users can only update their own profiles
- **Role validation**: Only admins can update courses
- **Audit logging**: All updates logged for accountability

### Delete Operations
- **Cascade deletes**: Properly configured in Prisma schema
- **Soft deletes**: Considered for critical data (not implemented)
- **Authorization checks**: Only authorized users can delete

## Security Features Implementation

### Account Lockout
```typescript
// After 5 failed attempts
if (user.loginAttempts >= 5) {
  await prisma.user.update({
    where: { id: user.id },
    data: { 
      lockedUntil: new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
    }
  })
}
```

### Audit Logging
```typescript
await createAuditLog(
  session.user.id,
  'CREATE',
  'COURSE',
  course.id,
  `Created course: ${course.name}`
)
```

### Public Admin Registration Prevention
```typescript
if (role === 'ADMIN') {
  return NextResponse.json(
    { error: 'Admin accounts cannot be created through public registration' },
    { status: 403 }
  )
}
```

## Code Quality Improvements

The implementation follows TypeScript best practices:
- Type-safe function parameters and return values
- Proper error handling with typed exceptions
- Modular component architecture
- Reusable utility functions
- Comprehensive code comments where necessary

*Note: Code screenshots should be inserted here showing secure vs insecure implementations*

