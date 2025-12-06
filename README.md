# Atlas University Student Portal

## 🎓 Project Overview

**Atlas University Student Portal** is a secure, role-based web application designed for managing student information, course enrollments, attendance tracking, and academic resources. This project demonstrates enterprise-level security practices in modern web application development using Next.js 16, TypeScript, and PostgreSQL.

**Project Type**: Option B (Custom Development)  
**Technology Stack**: Next.js 16, React 19, TypeScript, Prisma ORM, PostgreSQL (Neon), NextAuth.js  
**Security Focus**: Authentication, Authorization, Input Validation, Session Management, Audit Logging

---

## 🎯 Features and Security Objectives

### Core Functionalities
- **User Authentication & Authorization** - Secure login with role-based access control (RBAC)
- **Student Management** - CRUD operations for student profiles and enrollment
- **Course Management** - Create, update, and manage courses with capacity limits
- **Attendance Tracking** - Mark and monitor student attendance with percentage alerts
- **Course Materials Library** - Upload/download educational resources (PDFs, slides, videos)
- **Announcements System** - Broadcast important updates to students
- **Bulk Operations** - CSV-based student import for efficiency
- **Audit Logging** - Track all administrative actions for accountability

### Security Improvements Implemented

#### 1. **Authentication Security**
- ✅ Secure password hashing using bcrypt (12 rounds)
- ✅ JWT-based session management with httpOnly cookies
- ✅ Password strength requirements (min 8 chars)
- ✅ Account lockout after failed login attempts
- ✅ Secure session timeout and refresh mechanisms

#### 2. **Authorization & Access Control**
- ✅ Role-Based Access Control (RBAC) - ADMIN and STUDENT roles
- ✅ Middleware-based route protection
- ✅ API endpoint authorization checks
- ✅ Removed public admin registration (admins can only be created by other admins)
- ✅ Principle of least privilege enforcement

#### 3. **Input Validation & Data Sanitization**
- ✅ Zod schema validation for all user inputs
- ✅ Server-side validation on all API routes
- ✅ React Hook Form with client-side validation
- ✅ File upload validation (type, size limits)
- ✅ Email format validation

#### 4. **SQL Injection Prevention**
- ✅ Prisma ORM with parameterized queries
- ✅ No raw SQL queries exposed to user input
- ✅ Type-safe database operations

#### 5. **XSS (Cross-Site Scripting) Prevention**
- ✅ React's automatic output escaping
- ✅ Content Security Policy (CSP) headers
- ✅ Sanitized user-generated content
- ✅ No `dangerouslySetInnerHTML` without sanitization

#### 6. **CSRF Protection**
- ✅ Next.js built-in CSRF protection for API routes
- ✅ SameSite cookie attribute
- ✅ Token-based API authentication

#### 7. **Session Management**
- ✅ Secure session storage with JWT
- ✅ httpOnly and secure cookie flags
- ✅ Session expiration and renewal
- ✅ Logout functionality with session cleanup

#### 8. **Audit Logging**
- ✅ Database-level audit logs for all admin actions
- ✅ User tracking (who, what, when)
- ✅ IP address and user agent logging
- ✅ Action details stored for compliance

#### 9. **Error Handling**
- ✅ Generic error messages to prevent information disclosure
- ✅ Detailed logging for debugging (server-side only)
- ✅ User-friendly error pages
- ✅ No stack traces exposed in production

#### 10. **Rate Limiting**
- ✅ Login attempt rate limiting
- ✅ Account lockout mechanism
- ✅ Protection against brute force attacks

---

## 📁 Project Structure

```
atlas-university-portal/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/                 # NextAuth.js authentication
│   │   ├── register/             # User registration endpoint
│   │   ├── admin/                # Admin-only API routes
│   │   │   ├── announcements/    # Announcement management
│   │   │   ├── attendance/       # Attendance tracking
│   │   │   ├── bulk-import/      # CSV student import
│   │   │   ├── courses/          # Course management
│   │   │   ├── create-user/      # Admin user creation
│   │   │   └── students/         # Student management
│   │   └── student/              # Student API routes
│   │       ├── change-password/  # Password change
│   │       ├── materials/        # Material downloads
│   │       └── profile/          # Profile updates
│   ├── admin/                    # Admin pages
│   │   ├── announcements/        # Announcement UI
│   │   ├── bulk-operations/      # CSV import UI
│   │   ├── courses/              # Course management UI
│   │   ├── students/             # Student list UI
│   │   └── users/                # User management UI
│   ├── student/                  # Student pages
│   │   ├── attendance/           # View attendance
│   │   ├── courses/              # View & enroll courses
│   │   ├── materials/            # Access materials
│   │   └── profile/              # Edit profile
│   ├── login/                    # Login page
│   ├── register/                 # Student registration
│   ├── dashboard/                # Role-based dashboard
│   └── page.tsx                  # Landing page
├── components/                   # React components
│   ├── admin/                    # Admin-specific components
│   ├── auth/                     # Authentication forms
│   ├── layout/                   # Layout components (Navbar, Footer)
│   ├── student/                  # Student-specific components
│   └── ui/                       # Reusable UI components (shadcn/ui)
├── lib/                          # Utility libraries
│   ├── auth.ts                   # NextAuth configuration
│   ├── db.ts                     # Prisma client
│   ├── validators.ts             # Zod schemas
│   ├── audit.ts                  # Audit logging utilities
│   └── middleware.ts             # Authentication middleware
├── prisma/                       # Database
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Seed first admin user
├── tests/                        # Testing (SAST & Functional)
│   ├── security/                 # Security test cases
│   └── functional/               # Functional test cases
├── .env                          # Environment variables
├── ADMIN_SETUP.md               # Admin setup guide
├── SECURITY.md                  # Security documentation
└── README.md                    # This file
```

---

## 🚀 Setup and Installation Instructions

### Prerequisites
- **Node.js** 20+ 
- **pnpm** 10+ (Package manager)
- **PostgreSQL** (Neon serverless or local instance)
- **Git**

### Step 1: Clone Repository
```bash
git clone https://github.com/durga79/university-portal.git
cd university-portal
```

### Step 2: Install Dependencies
```bash
pnpm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root directory:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Environment
NODE_ENV=development
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

### Step 4: Initialize Database
```bash
# Generate Prisma Client
pnpm prisma generate

# Run migrations
pnpm prisma db push

# Seed first admin user
pnpm db:seed
```

**First Admin Credentials:**
- Email: `admin@university.edu`
- Password: `Admin@123`

⚠️ **Change this password after first login!**

### Step 5: Run Development Server
```bash
pnpm dev
```

Application will be available at `http://localhost:3000`

### Step 6: Run Tests
```bash
# SAST (Static Application Security Testing)
pnpm test:security

# Functional Tests
pnpm test:functional

# All Tests
pnpm test
```

---

## 📖 Usage Guidelines

### For Students

#### 1. **Register Account**
- Navigate to `/register`
- Fill in Name, Email, Password
- Account is automatically created as STUDENT role
- Redirected to login

#### 2. **Login**
- Go to `/login`
- Enter email and password
- Access student dashboard

#### 3. **Enroll in Courses**
- Navigate to "Courses" in navbar
- Browse available courses
- Click "Enroll" on desired courses
- View enrolled courses in dashboard

#### 4. **View Attendance**
- Go to "Attendance" in navbar
- See attendance percentage per course
- Red alert if below 75%

#### 5. **Access Course Materials**
- Go to "Courses" → Select a course
- Click "View Materials"
- Download PDFs, slides, videos

#### 6. **Edit Profile**
- Click "Profile" in navbar
- Update personal information
- Change password
- Upload profile picture

### For Administrators

#### 1. **First Login**
```
Email: admin@university.edu
Password: Admin@123
```

#### 2. **Create Users**
- Go to "Users" in navbar
- Fill the form (Name, Email, Password, Role)
- Can create both Students and Admins
- User receives credentials to login

#### 3. **Manage Courses**
- Navigate to "Courses"
- Create new courses with details
- Set capacity, credits, schedule
- Manage enrollments

#### 4. **Mark Attendance**
- Go to course details page
- Select date from calendar
- Mark each student (Present/Late/Absent)
- Click "Save Attendance"

#### 5. **Upload Course Materials**
- Go to course details
- Click "Course Materials"
- Upload files (max 2MB)
- Organize by week/module

#### 6. **Post Announcements**
- Navigate to "Announcements"
- Create announcement with priority
- Assign to specific course or all
- Students see on dashboard

#### 7. **Bulk Import Students**
- Go to "Bulk Operations"
- Download CSV template
- Fill with student data
- Upload CSV file

---

## 🛡️ Security Improvements Summary

### Vulnerabilities Addressed

| Vulnerability | Mitigation Strategy | Implementation |
|---------------|---------------------|----------------|
| **SQL Injection** | Parameterized queries via Prisma ORM | All database queries use Prisma's type-safe API |
| **XSS** | Output escaping + CSP | React auto-escaping, Content-Security-Policy headers |
| **CSRF** | SameSite cookies + Next.js protection | Built-in CSRF tokens, SameSite=Lax cookies |
| **Broken Authentication** | Secure password hashing + JWT | bcrypt (12 rounds), httpOnly JWT tokens |
| **Sensitive Data Exposure** | Environment variables + HTTPS | Secrets in .env, production uses HTTPS |
| **Broken Access Control** | RBAC + middleware | Role checks on every protected route |
| **Security Misconfiguration** | Secure headers + CSP | Helmet.js equivalent security headers |
| **Insufficient Logging** | Audit logging | All admin actions logged to database |
| **Insecure Deserialization** | JSON validation | Zod schema validation on all inputs |
| **Using Components with Known Vulnerabilities** | Dependency scanning | Regular `pnpm audit` checks |

### OWASP Top 10 Coverage

✅ **A01:2021 – Broken Access Control**: Role-based middleware, session validation  
✅ **A02:2021 – Cryptographic Failures**: bcrypt hashing, secure session storage  
✅ **A03:2021 – Injection**: Prisma ORM, input validation  
✅ **A04:2021 – Insecure Design**: Threat modeling, secure architecture  
✅ **A05:2021 – Security Misconfiguration**: Secure defaults, CSP headers  
✅ **A06:2021 – Vulnerable Components**: Dependency audits, updates  
✅ **A07:2021 – Authentication Failures**: Strong passwords, account lockout  
✅ **A08:2021 – Software and Data Integrity**: Input validation, audit logs  
✅ **A09:2021 – Logging Failures**: Comprehensive audit logging  
✅ **A10:2021 – SSRF**: No external URL fetching from user input  

---

## 🧪 Testing Process

### 1. Static Application Security Testing (SAST)

**Tools Used:**
- **ESLint Security Plugin** - Static code analysis
- **npm audit / pnpm audit** - Dependency vulnerability scanning
- **Prisma Studio** - Database security review

**Key Findings:**
- ✅ No high-severity vulnerabilities in dependencies
- ✅ All user inputs validated with Zod schemas
- ✅ No hardcoded secrets in codebase
- ✅ Secure configuration verified

### 2. Functional Security Testing

#### Test Case 1: SQL Injection Prevention
**Objective**: Verify application is protected against SQL injection  
**Steps**:
1. Attempt to login with `' OR '1'='1` as password
2. Try injecting SQL in search fields
3. Test course enrollment with malicious input

**Result**: ✅ All attempts blocked by Prisma ORM parameterization

#### Test Case 2: Authentication & Authorization
**Objective**: Verify role-based access control  
**Steps**:
1. Student attempts to access `/admin/users`
2. Unauthenticated user tries to access `/student/dashboard`
3. Admin tries to edit another admin's profile

**Result**: ✅ All unauthorized access attempts redirected to `/unauthorized`

#### Test Case 3: XSS Prevention
**Objective**: Verify protection against cross-site scripting  
**Steps**:
1. Inject `<script>alert('XSS')</script>` in announcement content
2. Add `<img src=x onerror=alert(1)>` to student name
3. Test with various XSS payloads

**Result**: ✅ All scripts escaped and rendered as text

### 3. Manual Penetration Testing

**Tests Performed:**
- ✅ Password reset flow security
- ✅ Session fixation attacks
- ✅ CSRF token validation
- ✅ File upload restrictions
- ✅ Brute force protection

**Results**: No critical vulnerabilities found

---

## 📊 Security Requirements Completion

| Requirement ID | Requirement | Status | Completion |
|----------------|-------------|--------|------------|
| SEC-001 | Input validation for all forms | ✅ Completed | 100% |
| SEC-002 | Password hashing with bcrypt | ✅ Completed | 100% |
| SEC-003 | Role-based access control | ✅ Completed | 100% |
| SEC-004 | SQL injection prevention | ✅ Completed | 100% |
| SEC-005 | XSS prevention | ✅ Completed | 100% |
| SEC-006 | CSRF protection | ✅ Completed | 100% |
| SEC-007 | Secure session management | ✅ Completed | 100% |
| SEC-008 | Audit logging | ✅ Completed | 100% |
| SEC-009 | Rate limiting | ✅ Completed | 100% |
| SEC-010 | Secure error handling | ✅ Completed | 100% |
| SEC-011 | File upload validation | ✅ Completed | 100% |
| SEC-012 | Account lockout mechanism | ✅ Completed | 100% |
| SEC-013 | Remove public admin registration | ✅ Completed | 100% |
| SEC-014 | Environment variable protection | ✅ Completed | 100% |
| SEC-015 | HTTPS enforcement (production) | ✅ Completed | 100% |

---

## 🔗 Contributions and References

### Technology Stack

- **Next.js 16** - React framework (Vercel, 2024)
- **React 19** - UI library (Meta, 2024)
- **TypeScript 5** - Type safety (Microsoft, 2024)
- **Prisma ORM 5** - Database toolkit (Prisma Labs, 2024)
- **NextAuth.js 4** - Authentication (NextAuth.js, 2024)
- **Tailwind CSS 3** - Utility-first CSS (Tailwind Labs, 2024)
- **shadcn/ui** - Component library (shadcn, 2024)
- **Zod 4** - Schema validation (Colin McDonnell, 2024)
- **bcryptjs** - Password hashing (dcodeIO, 2024)
- **Neon PostgreSQL** - Serverless database (Neon, 2024)

### References

1. OWASP Top 10 (2021) - https://owasp.org/www-project-top-ten/
2. Next.js Security Best Practices - https://nextjs.org/docs/app/building-your-application/security
3. Prisma Security Guide - https://www.prisma.io/docs/guides/security
4. NextAuth.js Documentation - https://next-auth.js.org/
5. NIST Password Guidelines - https://pages.nist.gov/800-63-3/

### License

This project is developed for educational purposes as part of a university assignment.

---

## 👨‍💻 Author

**Student Name**: [Your Name]  
**Student ID**: [Your ID]  
**Institution**: National College of Ireland  
**Course**: Secure Software Development  
**Project**: Atlas University Student Portal

---

## 📝 Notes

- This application is designed with security as a primary concern
- All passwords are hashed using bcrypt before storage
- Environment variables must be configured before deployment
- Regular security audits and updates are recommended
- For production deployment, enable HTTPS and update NEXTAUTH_URL

---

**🎉 Atlas University Student Portal - Secure by Design**
