# Student Management System

A secure, role-based student management web application built with Next.js, TypeScript, Prisma, and Neon PostgreSQL. This project demonstrates enterprise-level security practices and follows secure software development principles.

## 🎯 Project Overview

This application provides a comprehensive platform for managing students, courses, and enrollments with strict role-based access control. It features separate dashboards for administrators and students, each with tailored functionalities and permissions.

### Key Features

- **Secure Authentication**: Password hashing with bcrypt, session management, and account lockout protection
- **Role-Based Access Control (RBAC)**: Separate dashboards for admins and students with middleware protection
- **Course Management**: Full CRUD operations for administrators
- **Student Enrollment**: Browse courses, enroll, and manage enrollments
- **Audit Logging**: Track all administrative actions
- **Modern UI/UX**: Responsive design with Tailwind CSS and custom components

## 🔒 Security Features

### 1. Authentication & Authorization
- **Password Security**: Bcrypt hashing with 12 salt rounds
- **Strong Password Policy**: Enforces uppercase, lowercase, numbers, and special characters
- **Session Management**: JWT-based sessions with secure httpOnly cookies
- **Account Lockout**: Automatic lockout after 5 failed login attempts (15-minute duration)
- **Role-Based Middleware**: Protects routes based on user roles (ADMIN/STUDENT)

### 2. Input Validation & Sanitization
- **Zod Schema Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: Prisma ORM with parameterized queries
- **XSS Protection**: React auto-escaping and input sanitization
- **CSRF Protection**: Next.js built-in CSRF token validation

### 3. Data Protection
- **Secure Database Connection**: SSL-enabled Neon PostgreSQL
- **Audit Logging**: Comprehensive logging of admin actions with timestamps
- **Data Validation**: Type-safe operations with TypeScript and Prisma

### 4. Additional Security Measures
- **No Sensitive Data Exposure**: Generic error messages to users
- **Secure Headers**: Next.js security headers configuration
- **Environment Variables**: Secrets managed through .env files
- **Database Migrations**: Version-controlled schema changes

## 🛠 Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library

### Backend
- **Next.js API Routes**: Server-side endpoints
- **NextAuth.js**: Authentication solution
- **Prisma ORM**: Type-safe database client
- **Neon PostgreSQL**: Serverless PostgreSQL database

### Security & Validation
- **Zod**: Schema validation
- **bcryptjs**: Password hashing
- **JWT**: Token-based authentication

## 📋 Requirements Met

### Functional Requirements
✅ **CRUD Operations**: Complete Create, Read, Update, Delete for courses and students  
✅ **Multi-layered Architecture**: Separation of database, business logic, and presentation  
✅ **Multiple User Roles**: Admin and Student roles with different privileges  
✅ **User Registration & Login**: Separate flows for both roles  
✅ **Course Enrollment**: Students can browse and enroll in courses  

### Non-Functional Requirements
✅ **Security**: Multiple layers of security controls  
✅ **Usability**: Clean, intuitive interface  
✅ **Maintainability**: Modular code structure  
✅ **Scalability**: Serverless database and efficient queries  

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Neon PostgreSQL database (or any PostgreSQL instance)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd student-management-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="your-neon-database-url"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-minimum-32-characters
NODE_ENV=development
```

4. **Run database migrations**
```bash
npx prisma migrate dev
```

5. **Generate Prisma Client**
```bash
npx prisma generate
```

6. **Start the development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
student-management-system/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── auth/                 # NextAuth endpoints
│   │   ├── register/             # User registration
│   │   ├── admin/                # Admin-only endpoints
│   │   │   ├── courses/          # Course CRUD
│   │   │   └── students/         # Student management
│   │   └── student/              # Student-only endpoints
│   │       ├── courses/          # Browse courses
│   │       └── enrollments/      # Enrollment operations
│   ├── admin/                    # Admin dashboard pages
│   │   ├── courses/              # Course management UI
│   │   └── students/             # Student management UI
│   ├── student/                  # Student dashboard pages
│   │   ├── dashboard/            # Student home
│   │   └── courses/              # Course browsing & enrollment
│   ├── login/                    # Login page
│   ├── register/                 # Registration page
│   └── layout.tsx                # Root layout with auth provider
├── components/                   # Reusable components
│   ├── auth/                     # Authentication components
│   ├── layout/                   # Layout components (Navbar)
│   └── ui/                       # UI components (Button, Card, etc.)
├── lib/                          # Utility libraries
│   ├── auth.ts                   # NextAuth configuration
│   ├── db.ts                     # Prisma client
│   ├── validators.ts             # Zod schemas
│   ├── audit.ts                  # Audit logging
│   └── utils.ts                  # Helper functions
├── prisma/                       # Database
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Migration history
├── middleware.ts                 # Route protection middleware
└── types/                        # TypeScript type definitions
```

## 👥 User Roles & Permissions

### Administrator
- ✅ View system statistics
- ✅ Create, edit, delete courses
- ✅ View all students
- ✅ Delete student accounts
- ✅ View audit logs
- ❌ Cannot enroll in courses

### Student
- ✅ View personal dashboard
- ✅ Browse available courses
- ✅ Enroll in courses (if seats available)
- ✅ Drop enrolled courses
- ✅ View enrollment history
- ❌ Cannot access admin functions

## 🧪 Testing

### Security Testing Performed

1. **SQL Injection Testing**: Tested with malicious input in all forms - prevented by Prisma ORM
2. **XSS Testing**: Attempted script injection in course descriptions - prevented by React escaping
3. **CSRF Testing**: Verified CSRF token validation on all POST/PUT/DELETE requests
4. **Authentication Testing**: Tested password validation, login attempts, session management
5. **Authorization Testing**: Attempted to access admin routes as student - blocked by middleware
6. **Input Validation**: Tested edge cases for all form inputs - validated by Zod schemas

### Functional Testing

- ✅ User registration (Admin & Student)
- ✅ User login with correct/incorrect credentials
- ✅ Account lockout after failed attempts
- ✅ Course creation, editing, deletion (Admin)
- ✅ Student enrollment and dropping courses
- ✅ Dashboard data display
- ✅ Role-based route protection

## 🔐 Security Implementation Details

### Password Security
```typescript
// Password hashing with bcrypt (12 rounds)
const hashedPassword = await bcrypt.hash(password, 12)

// Password validation requirements
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number
- At least 1 special character
```

### SQL Injection Prevention
```typescript
// Using Prisma ORM - all queries are parameterized
const user = await prisma.user.findUnique({
  where: { email }  // Safe from SQL injection
})
```

### CSRF Protection
```typescript
// NextAuth.js automatically includes CSRF tokens
// All mutations require valid CSRF token
```

### Role-Based Access Control
```typescript
// Middleware protects routes by role
export default withAuth(
  function middleware(req) {
    if (path.startsWith('/admin') && token?.role !== 'ADMIN') {
      return NextResponse.redirect('/unauthorized')
    }
  }
)
```

## 📊 Database Schema

### Key Models

**User**: Stores user credentials and metadata
- Password hashing with bcrypt
- Login attempt tracking
- Account lockout mechanism

**Profile**: Extended user information
- Student ID generation
- Additional personal details

**Course**: Course information
- Capacity management
- Active/inactive status

**Enrollment**: Student-Course relationship
- Status tracking (ACTIVE, COMPLETED, DROPPED)
- Prevents duplicate enrollments

**AuditLog**: Administrative action tracking
- User, action, entity details
- Timestamp and IP tracking

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Modern Aesthetics**: Gradient backgrounds, rounded corners
- **Accessible Components**: Using Radix UI primitives
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time client-side validation

## 📈 Future Enhancements

- [ ] Email verification for registration
- [ ] Password reset functionality
- [ ] Multi-factor authentication (MFA)
- [ ] Advanced reporting and analytics
- [ ] File upload for profile pictures
- [ ] Grade management system
- [ ] Notification system
- [ ] API rate limiting
- [ ] Advanced search and filtering

## 🤝 Contributing

This is an academic project. Contributions are not currently accepted.

## 📄 License

This project is developed for educational purposes as part of a Secure Software Engineering course.

## 👨‍💻 Developer

Developed as a secure software engineering project demonstrating:
- Secure authentication and authorization
- OWASP Top 10 vulnerability prevention
- Clean architecture and code organization
- Modern web development best practices
- Comprehensive security testing

## 📚 References

- OWASP Secure Coding Practices
- Next.js Security Documentation
- Prisma Security Best Practices
- NextAuth.js Documentation
- NIST Password Guidelines

---

**Note**: This application is designed for educational purposes and demonstrates security best practices. Always conduct thorough security audits before deploying to production.
