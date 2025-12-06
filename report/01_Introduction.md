# Introduction

The primary objective of this project was to design and implement a secure role-based web application that demonstrates the key characteristics demanded in an enterprise-level system, including robust authentication, limited authorization, structured data storage, and protection against common security vulnerabilities. The application, **Atlas University Student Portal**, was developed using Next.js 16 with React 19, TypeScript, and PostgreSQL, incorporating comprehensive security features to ensure the application meets the requirements of the academic brief on the necessity of secure software engineering.

The platform supports two distinct user types: **administrators** and **students**, each with different access privileges and functionalities. Administrators have elevated privileges to create, edit, and delete resources such as courses, student accounts, announcements, and manage attendance records. Students can access their personal dashboard, enroll in courses, view attendance percentages, access course materials, and manage their profiles.

The project was developed with a focus on secure software development methodologies throughout the entire lifecycle. Security considerations were integrated from the initial design phase, addressing risks such as SQL injection, credential attacks, session hijacking, and privilege escalation through defense-in-depth strategies, secure coding practices, and comprehensive input validation. The application serves as a practical demonstration of how security principles can be effectively implemented in modern web applications.

Key security features implemented include:
- **Authentication Security**: bcrypt password hashing (12 rounds), JWT-based session management with httpOnly cookies, account lockout mechanisms
- **Authorization**: Role-based access control (RBAC) with middleware protection, preventing unauthorized access to admin routes
- **Input Validation**: Zod schema validation on all API routes, preventing injection attacks
- **SQL Injection Prevention**: Prisma ORM with parameterized queries, eliminating raw SQL exposure
- **XSS Prevention**: React's automatic output escaping, Content Security Policy headers
- **CSRF Protection**: Next.js built-in CSRF protection, SameSite cookie attributes
- **Audit Logging**: Comprehensive logging of all administrative actions for accountability
- **Secure Session Management**: httpOnly, secure cookies with proper timeout mechanisms

The application demonstrates enterprise-level security practices while maintaining usability and functionality, making it suitable for real-world deployment in educational institutions.

