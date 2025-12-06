# Appendices

## Appendix A: Security Requirements Completion Table

| Requirement ID | Requirement | Status | Percentage of Completion |
|----------------|-------------|--------|-------------------------|
| SEC-001 | Input validation in Login/Register | ✅ Completed | 100% |
| SEC-002 | Password hashing with bcrypt | ✅ Completed | 100% |
| SEC-003 | Role-based access control (RBAC) | ✅ Completed | 100% |
| SEC-004 | SQL injection prevention | ✅ Completed | 100% |
| SEC-005 | XSS prevention | ✅ Completed | 100% |
| SEC-006 | CSRF protection | ✅ Completed | 100% |
| SEC-007 | Secure session management | ✅ Completed | 100% |
| SEC-008 | Audit logging | ✅ Completed | 100% |
| SEC-009 | Rate limiting and account lockout | ✅ Completed | 100% |
| SEC-010 | Secure error handling | ✅ Completed | 100% |
| SEC-011 | File upload validation | ✅ Completed | 100% |
| SEC-012 | Environment variable protection | ✅ Completed | 100% |
| SEC-013 | Public admin registration prevention | ✅ Completed | 100% |
| SEC-014 | HTTPS enforcement (production) | ✅ Completed | 100% |
| SEC-015 | Dependency security scanning | ✅ Completed | 100% |

**Overall Completion**: 15/15 requirements (100%)

---

## Appendix B: GUI Screenshots

### Landing Page
*[Insert screenshot of landing page here]*

### Student Registration
*[Insert screenshot of student registration page here]*

### Student Login
*[Insert screenshot of student login page here]*

### Admin Login
*[Insert screenshot of admin login page here]*

### Student Dashboard
*[Insert screenshot of student dashboard here]*

### Admin Dashboard
*[Insert screenshot of admin dashboard here]*

### Course Management (Admin)
*[Insert screenshot of course management interface here]*

### Course Enrollment (Student)
*[Insert screenshot of course enrollment interface here]*

### Attendance Tracking (Admin)
*[Insert screenshot of attendance marking interface here]*

### Attendance View (Student)
*[Insert screenshot of student attendance view here]*

### Course Materials Upload (Admin)
*[Insert screenshot of course materials upload interface here]*

### Course Materials View (Student)
*[Insert screenshot of course materials library here]*

### User Management (Admin)
*[Insert screenshot of user management interface here]*

### Student Profile
*[Insert screenshot of student profile page here]*

### Announcements
*[Insert screenshot of announcements interface here]*

### Bulk Operations (CSV Import)
*[Insert screenshot of bulk import interface here]*

---

## Appendix C: Database Schema

### Prisma Schema Overview
*[Insert screenshot of Prisma schema file or Prisma Studio view here]*

### Entity Relationship Diagram
*[Insert ERD diagram showing relationships between entities here]*

---

## Appendix D: Code Snippets

### Secure Password Hashing
*[Insert code screenshot showing bcrypt implementation]*

### SQL Injection Prevention
*[Insert code screenshot showing Prisma ORM usage]*

### Input Validation
*[Insert code screenshot showing Zod schema validation]*

### Authorization Middleware
*[Insert code screenshot showing role-based access control]*

### Secure Session Configuration
*[Insert code screenshot showing NextAuth.js configuration]*

---

## Appendix E: Testing Evidence

### SAST Test Results
*[Insert screenshot of pnpm audit results showing 0 vulnerabilities]*

### ESLint Security Scan Results
*[Insert screenshot of lint:security command output]*

### Functional Test Results
*[Insert screenshots of security test execution results]*

### SQL Injection Test Evidence
*[Insert screenshot showing SQL injection attempt being blocked]*

### XSS Test Evidence
*[Insert screenshot showing XSS payload being escaped]*

### Authorization Test Evidence
*[Insert screenshot showing unauthorized access being blocked]*

---

## Appendix F: Architecture Diagrams

### System Architecture Diagram
*[Insert system architecture diagram created using Draw.io or similar tool]*

### Data Flow Diagram (Level 0)
*[Insert context diagram showing external entities and system]*

### Data Flow Diagram (Level 1)
*[Insert DFD Level 1 showing system decomposition]*

### Component Diagram
*[Insert component diagram showing system components and interactions]*

### Use Case Diagram
*[Insert use case diagram showing user interactions]*

---

## Appendix G: Threat Model

### Threat Model Table
*[Insert detailed threat model table with threats, attack vectors, mitigations]*

### Security Control Matrix
*[Insert matrix showing security controls and their effectiveness]*

---

## Appendix H: GitHub Repository

**Repository URL**: https://github.com/durga79/university-portal

### Commit History
*[Insert screenshot of GitHub commit history showing regular development]*

### Repository Structure
*[Insert screenshot of repository file structure]*

### README Documentation
*[Insert screenshot of README.md on GitHub]*

---

## Appendix I: Video Presentation

**Video Link**: *[Insert YouTube unlisted video link here]*

**Video Duration**: *[Insert duration, should be max 5 minutes]*

**Video Contents**:
1. Application demonstration (functional features)
2. Security features demonstration
3. Code walkthrough
4. Database implementation walkthrough

---

## Appendix J: Additional Documentation

### README.md
The complete README.md file is available in the GitHub repository, containing:
- Project overview
- Features and security objectives
- Setup and installation instructions
- Usage guidelines
- Security improvements summary
- Testing process documentation

### SECURITY.md
Comprehensive security documentation including:
- Security requirements
- Threat model
- Security architecture
- Implementation details
- Testing results
- Incident response procedures

### Test Files
Security test files are located in `tests/security/`:
- `sql-injection.test.ts`
- `xss-prevention.test.ts`
- `authentication-authorization.test.ts`

---

**Note**: All screenshots and diagrams should be inserted in the appropriate sections above. Ensure all images are clear, properly labeled, and relevant to the section content.

