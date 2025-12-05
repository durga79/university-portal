# 🎓 Complete Features Guide

## 📚 How to Use Your Student Management Portal

### 🔐 Getting Started

#### 1️⃣ **Create Your First Admin Account**
```
1. Go to http://localhost:3000/register
2. Fill in:
   - Name: Admin User
   - Email: admin@university.edu
   - Password: Admin@123
   - Account Type: Administrator
3. Click "Create Account"
4. Login at /login
```

#### 2️⃣ **Create Sample Courses (As Admin)**
```
1. Login as Admin
2. Go to Admin Dashboard → Courses
3. Click "Add Course"
4. Fill in course details:
   - Course Code: CS101
   - Course Name: Introduction to Programming
   - Credits: 3
   - Capacity: 30
   - Instructor: Dr. Smith
   - Schedule: Mon/Wed 10:00-11:30
   - Description: Learn programming fundamentals
5. Click "Create Course"
6. Repeat for more courses (CS102, MATH201, etc.)
```

#### 3️⃣ **Create Student Accounts**
```
Option A - Students Register Themselves:
1. Students go to /register
2. Choose "Student" account type
3. Register and login

Option B - Admin Creates Students:
(We'll add this feature below)
```

---

## 👨‍💼 ADMIN FEATURES

### 📊 **Dashboard** (`/admin`)
**What you see:**
- Total Students count
- Total Courses count  
- Active Enrollments count
- Recent Activity log (who enrolled in what)

**What you can do:**
- Quick overview of system status
- See latest admin actions in audit log

---

### 📚 **Course Management** (`/admin/courses`)

**View All Courses:**
- See all courses in a table
- Columns: Code, Name, Credits, Capacity, Enrolled, Status
- Each course shows: `Enrolled/Capacity` (e.g., 15/30)

**Create New Course:**
1. Click "Add Course" button
2. Fill in all details
3. Set capacity (max students)
4. Toggle Active/Inactive status
5. Click "Create Course"

**Edit Course:**
1. Click Edit icon (✏️) on any course
2. Modify details
3. Click "Update Course"

**Delete Course:**
1. Click Delete icon (🗑️)
2. Confirm deletion
3. Course and all enrollments are removed

**View Enrollments (Coming):**
- Click course name
- See list of enrolled students
- Assign grades
- Drop students if needed

---

### 👥 **Student Management** (`/admin/students`)

**View All Students:**
- Table showing all registered students
- Columns: Student ID, Name, Email, Enrollments, Registered Date

**View Student Details:**
- See student's profile
- View all enrolled courses
- See grades and progress

**Delete Student:**
- Remove student account
- All enrollments are automatically removed
- Action is logged in audit log

---

### 📝 **Audit Log** (`/admin` - Recent Activity section)

**What's Logged:**
- Course creation/updates/deletion
- Student deletions
- All admin actions
- Timestamp and admin name
- Action details

---

## 👨‍🎓 STUDENT FEATURES

### 🏠 **Student Dashboard** (`/student/dashboard`)

**Overview Cards:**
- **Enrolled Courses** - Total count
- **Total Credits** - Sum of all enrolled course credits
- **Available Courses** - Courses you can enroll in
- **Completed** - Finished courses (future)

**My Enrolled Courses:**
- Grid of course cards
- Each card shows:
  - Course code and name
  - Description
  - Credits
  - Instructor
  - Schedule
  - Status badge (ACTIVE/COMPLETED)
- Drop Course button for each

**Empty State:**
- If no enrollments: "Browse available courses" link

---

### 📖 **Course Catalog** (`/student/courses`)

**Available Courses Section:**
- All courses NOT enrolled in
- Shows available seats (e.g., 15/30 seats)
- Color-coded:
  - Green: Seats available
  - Red: Course full

**Each Course Card Shows:**
- Course code and name
- Description preview
- Credits
- Available seats
- Instructor
- Schedule
- "Enroll Now" button (or "Course Full")

**Enrolled Courses Section:**
- Courses you're already in
- "Enrolled" badge with checkmark
- "Drop Course" button

---

## 🎯 STEP-BY-STEP: How to Enroll Students

### Method 1: Student Self-Enrollment

1. **Student logs in** → Goes to `/student/courses`
2. **Browses available courses**
3. **Clicks "Enroll Now"** on desired course
4. **System checks:**
   - Is course active? ✓
   - Are seats available? ✓
   - Not already enrolled? ✓
5. **Success!** Student is enrolled
6. **Goes to Dashboard** → See enrolled course

### Method 2: Admin Manages Enrollment (Coming Soon)

1. Admin goes to course details
2. Clicks "Enroll Students"
3. Selects students from list
4. Bulk enrolls them

---

## 🔄 COMMON WORKFLOWS

### Workflow 1: New Semester Setup

```
ADMIN:
1. Create new courses for semester
2. Set capacity for each course
3. Set courses to Active
4. Wait for students to enroll

STUDENTS:
1. Login to portal
2. Browse course catalog
3. Enroll in desired courses
4. Check dashboard for confirmation
```

### Workflow 2: Student Enrollment Process

```
1. Student registers account
   → Auto-assigned Student ID
   
2. Student logs in
   → Sees empty dashboard
   
3. Student goes to Courses page
   → Sees all available courses
   
4. Student clicks "Enroll Now"
   → System validates:
      - Course active? ✓
      - Seats available? ✓
      - Not duplicate? ✓
   
5. Enrollment created
   → Status: ACTIVE
   
6. Student dashboard updates
   → Course appears in "My Enrolled Courses"
   
7. Admin can see in:
   → Course enrollment count increases
   → Recent activity log
```

### Workflow 3: Drop a Course

```
STUDENT:
1. Go to Dashboard or Courses page
2. Find enrolled course
3. Click "Drop Course"
4. Confirm action
5. Enrollment status → DROPPED
6. Course disappears from active list
```

---

## 🎨 UI COMPONENTS EXPLAINED

### Homepage Cards

**Course Catalog Card:**
- Icon: 📚 Blue
- Links to: Browse courses (requires login)

**Academic Calendar Card:**
- Icon: 📅 Green  
- Shows important dates (future feature)

**My Progress Card:**
- Icon: 📈 Purple
- Links to: Login to see grades

**Resources Card:**
- Icon: 📄 Orange
- Links to: Student resources

### Quick Links Sidebar

**Student Login:**
- Direct link to login page
- For existing students

**New Student Registration:**
- For first-time users
- Creates student account

**Admin Portal:**
- For administrators
- Requires admin account

### System Status

**Portal Status:**
- 🟢 Green dot (pulsing) = Online
- Shows "Just now" timestamp
- Confirms system is operational

---

## 🔒 SECURITY FEATURES IN ACTION

### Password Requirements
When registering, password must have:
- ✓ Minimum 8 characters
- ✓ At least 1 uppercase (A-Z)
- ✓ At least 1 lowercase (a-z)
- ✓ At least 1 number (0-9)
- ✓ At least 1 special character (!@#$%^&*)

Example valid password: `Student@123`

### Account Lockout
- After 5 failed login attempts
- Account locked for 15 minutes
- Prevents brute force attacks

### Session Management
- Sessions expire after 30 days
- Secure httpOnly cookies
- JWT encryption

### Role-Based Access
- Students can't access `/admin` routes
- Admins can't access `/student` routes
- Middleware enforces this automatically

---

## 📊 DATABASE STRUCTURE

### What Happens Behind the Scenes

**When Student Registers:**
```
1. User record created
   - Email, hashed password, name, role
   - Login attempts counter
   
2. Profile record created
   - Auto-generated Student ID (STU123456)
   - Links to User
```

**When Student Enrolls:**
```
1. Enrollment record created
   - Links Student to Course
   - Status: ACTIVE
   - Timestamp
   
2. Duplicate check
   - Unique constraint: (userId + courseId)
   - Prevents double enrollment
```

**When Admin Creates Course:**
```
1. Course record created
   - Code (unique), Name, Credits, Capacity
   - Instructor, Schedule, Description
   
2. Audit log entry created
   - Action: CREATE
   - Entity: COURSE
   - Admin ID, Timestamp
```

---

## 🎓 SAMPLE DATA TO TEST WITH

### Sample Courses

```
Course 1:
- Code: CS101
- Name: Introduction to Programming  
- Credits: 3
- Capacity: 30
- Instructor: Dr. Smith
- Schedule: Mon/Wed 10:00-11:30
- Description: Learn Python programming basics

Course 2:
- Code: CS102
- Name: Data Structures
- Credits: 4
- Capacity: 25
- Instructor: Dr. Johnson
- Schedule: Tue/Thu 14:00-16:00
- Description: Study algorithms and data structures

Course 3:
- Code: MATH201
- Name: Calculus I
- Credits: 4
- Capacity: 40
- Instructor: Dr. Williams
- Schedule: Mon/Wed/Fri 09:00-10:00
- Description: Differential and integral calculus
```

### Sample Student Accounts

```
Student 1:
- Name: John Doe
- Email: john@student.edu
- Password: Student@123
- Will receive: STU123456

Student 2:
- Name: Jane Smith
- Email: jane@student.edu
- Password: Student@123
- Will receive: STU234567
```

---

## 🚀 TESTING THE COMPLETE FLOW

### Full Test Scenario

**Day 1: Admin Setup**
```
1. Create admin account: admin@university.edu
2. Login as admin
3. Create 3 courses (CS101, CS102, MATH201)
4. Set capacities and details
5. Logout
```

**Day 2: Student Registration**
```
1. Register as student: john@student.edu
2. Note auto-generated Student ID
3. Login with credentials
4. See empty dashboard
```

**Day 3: Course Enrollment**
```
1. Go to Courses page
2. See 3 available courses
3. Enroll in CS101 → Success
4. Try enroll in CS101 again → Error: Already enrolled
5. Enroll in MATH201 → Success
6. Go to Dashboard → See 2 enrolled courses
7. Total credits: 7 (3 + 4)
```

**Day 4: Admin Monitoring**
```
1. Login as admin
2. Check Dashboard → See 2 active enrollments
3. Go to Courses → CS101 shows 1/30 enrolled
4. Go to Students → See John Doe with 2 enrollments
5. Check Recent Activity → See enrollment actions
```

**Day 5: Drop Course**
```
1. Login as student (John)
2. Go to Dashboard
3. Click "Drop Course" on CS101
4. Confirm → Status changed to DROPPED
5. Dashboard now shows 1 course
6. Credits: 4 (only MATH201)
```

**Day 6: Course Capacity Test**
```
1. Admin sets CS102 capacity to 1
2. John enrolls in CS102 → Success (1/1 filled)
3. Jane tries to enroll in CS102 → Error: Course is full
4. Jane sees "Course Full" button (disabled)
```

---

## 🎯 WHAT'S NEXT? (Future Enhancements)

- [ ] Grade assignment and viewing
- [ ] Announcements from admin to students
- [ ] Course materials upload (PDFs, videos)
- [ ] Assignment submission
- [ ] Attendance tracking
- [ ] Student transcripts
- [ ] Email notifications
- [ ] Course prerequisites
- [ ] Waitlist for full courses
- [ ] Semester/Term management
- [ ] Advanced search and filters
- [ ] Export reports (CSV/PDF)
- [ ] Student profile editing
- [ ] Password reset functionality
- [ ] Two-factor authentication

---

## ❓ TROUBLESHOOTING

**Q: Can't see courses after enrolling?**
- A: Check Dashboard, not the Courses page. Enrolled courses show on Dashboard.

**Q: "Already enrolled" error?**
- A: You can't enroll twice in same course. Check your Dashboard.

**Q: "Course is full" message?**
- A: Course reached capacity. Contact admin or try another course.

**Q: Can't create course as student?**
- A: Only admin accounts can create courses. Register as Admin.

**Q: Student ID not showing?**
- A: Student IDs are auto-generated. Check your Dashboard (shows below your name).

**Q: How to see audit logs?**
- A: Login as admin → Dashboard → "Recent Activity" section

---

**📧 Need Help?** Check the README.md for technical documentation!

