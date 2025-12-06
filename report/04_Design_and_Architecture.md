# Design and Architecture

## System Architecture

The architectural design follows a **three-tier architecture** with clear separation of concerns:

1. **Presentation Layer**: Next.js React components with server-side rendering
2. **Application Layer**: Next.js API routes with business logic and security middleware
3. **Data Layer**: PostgreSQL database accessed through Prisma ORM

### Component Architecture

The application is structured using Next.js 16 App Router, which provides:
- **Server Components**: For data fetching and server-side rendering
- **Client Components**: For interactive UI elements
- **API Routes**: For backend logic and data operations
- **Middleware**: For authentication and authorization checks

### Security Architecture

The security architecture implements **defense-in-depth** principles with multiple layers of protection:

1. **Authentication Layer**: NextAuth.js handles user authentication with JWT tokens
2. **Authorization Layer**: Middleware enforces role-based access control
3. **Validation Layer**: Zod schemas validate all inputs before processing
4. **Data Access Layer**: Prisma ORM prevents SQL injection through parameterized queries
5. **Output Layer**: React automatically escapes output to prevent XSS

## Threat Modeling

A comprehensive threat modeling analysis was conducted to identify potential attack vectors and design appropriate mitigations:

### Threat 1: SQL Injection
- **Attack Vector**: Malicious SQL code injected through user inputs
- **Likelihood**: High (without mitigation)
- **Impact**: Complete database compromise
- **Mitigation**: Prisma ORM with parameterized queries, input validation
- **Residual Risk**: Low

### Threat 2: Cross-Site Scripting (XSS)
- **Attack Vector**: Malicious JavaScript injected in user-generated content
- **Likelihood**: Medium
- **Impact**: Session hijacking, data theft
- **Mitigation**: React automatic escaping, Content Security Policy headers
- **Residual Risk**: Low

### Threat 3: Broken Authentication
- **Attack Vector**: Brute force attacks, weak passwords, session theft
- **Likelihood**: High (without mitigation)
- **Impact**: Unauthorized account access
- **Mitigation**: bcrypt hashing (12 rounds), account lockout, secure sessions
- **Residual Risk**: Low

### Threat 4: Broken Access Control
- **Attack Vector**: Privilege escalation, horizontal access
- **Likelihood**: Medium
- **Impact**: Unauthorized data access
- **Mitigation**: Role-based middleware, session validation
- **Residual Risk**: Low

### Threat 5: Sensitive Data Exposure
- **Attack Vector**: Unencrypted data, exposed secrets
- **Likelihood**: Medium
- **Impact**: Credential theft, privacy breach
- **Mitigation**: Environment variables, password hashing, HTTPS
- **Residual Risk**: Low

## Data Flow Diagram

The system data flow can be represented at multiple levels:

**Level 0 (Context Diagram):**
- External entities: Student, Administrator
- System: Atlas University Portal
- Data flows: Authentication requests, CRUD operations, file uploads

**Level 1 (System Decomposition):**
- Processes: Authentication, Course Management, Enrollment, Attendance, Materials, Announcements
- Data stores: User Database, Course Database, Enrollment Database, Audit Logs
- Data flows between processes and stores

*Note: Data Flow Diagrams should be inserted here as screenshots (created using Draw.io)*

## Database Schema Design

The database schema follows a normalized design with the following key entities:

- **User**: Stores authentication credentials and basic user information
- **Profile**: Extended user information (student ID, phone, address, bio)
- **Course**: Course details (name, code, credits, capacity, instructor)
- **Enrollment**: Many-to-many relationship between Users and Courses
- **Attendance**: Attendance records linked to User and Course
- **CourseMaterial**: File metadata and base64-encoded content
- **Announcement**: System and course-specific announcements
- **AuditLog**: Immutable log of all administrative actions

Relationships are properly defined with foreign key constraints and cascade delete rules to maintain referential integrity.

## Security Design Patterns

1. **Principle of Least Privilege**: Users only have access to resources they need
2. **Defense in Depth**: Multiple security layers (authentication, authorization, validation, ORM)
3. **Fail Secure**: System defaults to denying access when uncertain
4. **Secure by Default**: Security features enabled by default, not opt-in
5. **Input Validation**: All inputs validated at API boundary
6. **Output Encoding**: All outputs properly escaped
7. **Audit Trail**: All sensitive operations logged

*Note: Architecture diagrams and DFDs should be inserted here as screenshots*

