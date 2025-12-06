# Requirements

The system was developed to fulfill both functional and non-functional requirements, with security being a priority throughout the entire development process.

## Functional Requirements

### User Management
- **FR-001**: The system shall support two distinct user roles: Administrator and Student
- **FR-002**: Students shall be able to self-register through a public registration interface
- **FR-003**: Administrators shall only be created by existing administrators (no public admin registration)
- **FR-004**: Users shall be able to authenticate using email and password
- **FR-005**: Users shall be able to change their passwords after authentication
- **FR-006**: Users shall be able to update their profile information (name, phone, address, bio, profile picture)

### Course Management
- **FR-007**: Administrators shall be able to create, read, update, and delete courses
- **FR-008**: Courses shall have attributes: name, code, description, credits, capacity, instructor, schedule
- **FR-009**: Students shall be able to view available courses
- **FR-010**: Students shall be able to enroll in courses (subject to capacity limits)
- **FR-011**: Students shall be able to drop enrolled courses
- **FR-012**: Administrators shall be able to view all enrollments

### Attendance Management
- **FR-013**: Administrators shall be able to mark attendance for enrolled students
- **FR-014**: Attendance shall support three statuses: Present, Late, Absent
- **FR-015**: Students shall be able to view their attendance percentage per course
- **FR-016**: System shall alert students if attendance falls below 75%

### Course Materials
- **FR-017**: Administrators shall be able to upload course materials (PDFs, slides, videos)
- **FR-018**: Materials shall be organized by week and module
- **FR-019**: Students shall be able to download materials for enrolled courses
- **FR-020**: File uploads shall be limited to 2MB maximum

### Announcements
- **FR-021**: Administrators shall be able to create announcements
- **FR-022**: Announcements shall have priority levels: Normal, High, Urgent
- **FR-023**: Announcements can be course-specific or system-wide
- **FR-024**: Students shall see announcements on their dashboard

### Bulk Operations
- **FR-025**: Administrators shall be able to bulk import students via CSV file
- **FR-026**: CSV import shall validate data before creating accounts
- **FR-027**: Import results shall show success and failure counts

### Audit and Logging
- **FR-028**: System shall log all administrative actions
- **FR-029**: Audit logs shall include: user, action type, entity, timestamp, IP address

## Non-Functional Requirements

### Security Requirements
- **NFR-001**: All passwords shall be hashed using bcrypt with minimum 12 rounds
- **NFR-002**: Session tokens shall be stored in httpOnly, secure cookies
- **NFR-003**: All user inputs shall be validated using Zod schemas
- **NFR-004**: Database queries shall use parameterized queries (Prisma ORM)
- **NFR-005**: All output shall be escaped to prevent XSS attacks
- **NFR-006**: CSRF protection shall be enabled on all state-changing operations
- **NFR-007**: Role-based access control shall be enforced via middleware
- **NFR-008**: Account lockout shall occur after 5 failed login attempts
- **NFR-009**: Error messages shall not expose sensitive system information
- **NFR-010**: All API routes shall validate user authentication and authorization

### Usability Requirements
- **NFR-011**: Interface shall be responsive and work on desktop and mobile devices
- **NFR-012**: Navigation shall be intuitive with clear role-based menus
- **NFR-013**: Forms shall provide clear validation error messages
- **NFR-014**: Dashboard shall display relevant information based on user role

### Performance Requirements
- **NFR-015**: Page load times shall be under 2 seconds
- **NFR-016**: Database queries shall be optimized with proper indexing
- **NFR-017**: File uploads shall be processed asynchronously

### Maintainability Requirements
- **NFR-018**: Code shall follow TypeScript best practices
- **NFR-019**: Components shall be modular and reusable
- **NFR-020**: Database schema shall be version-controlled via Prisma migrations

## Use Case Diagram

The system supports the following primary use cases:

**Administrator Use Cases:**
- Create/Read/Update/Delete Courses
- Create/Read/Update/Delete Students
- Mark Attendance
- Upload Course Materials
- Create Announcements
- Bulk Import Students
- View Audit Logs

**Student Use Cases:**
- Register Account
- Login
- View Dashboard
- Enroll in Courses
- View Attendance
- Download Course Materials
- View Announcements
- Update Profile
- Change Password

*Note: Use case diagram should be inserted here as a screenshot (created using Draw.io or similar tool)*

