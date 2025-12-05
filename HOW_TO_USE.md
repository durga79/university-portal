# 🎓 Complete University Portal - How to Use Guide

## 🚀 Quick Start (5 Minutes Setup)

### Step 1: Start the Server
```bash
cd ~/student-management-system
pnpm dev
```
Visit: **http://localhost:3000**

---

## 👨‍💼 ADMIN WORKFLOW

### 1️⃣ Create Admin Account
1. Go to **http://localhost:3000/register**
2. Fill in:
   - Name: `Admin User`
   - Email: `admin@university.edu`
   - Password: `Admin@123`
   - Account Type: **Administrator**
3. Click "Create Account"
4. Login at **/login**

---

### 2️⃣ Add Courses (Admin Dashboard → Courses)

**URL:** `/admin/courses`

**Example Course 1:**
```
Course Code: CS101
Course Name: Introduction to Programming
Credits: 3
Capacity: 30
Instructor: Dr. Sarah Johnson
Schedule: Mon/Wed 10:00-11:30
Description: Learn Python programming fundamentals, variables, loops, and functions.
Active: ✓ Checked
```

**Example Course 2:**
```
Course Code: CS102
Course Name: Data Structures & Algorithms
Credits: 4
Capacity: 25
Instructor: Dr. Michael Chen
Schedule: Tue/Thu 14:00-16:00
Description: Study arrays, linked lists, trees, sorting algorithms, and complexity analysis.
Active: ✓ Checked
```

**Example Course 3:**
```
Course Code: MATH201
Course Name: Calculus I
Credits: 4
Capacity: 40
Instructor: Dr. Emily Williams
Schedule: Mon/Wed/Fri 09:00-10:00
Description: Differential and integral calculus, limits, derivatives, and applications.
Active: ✓ Checked
```

**Example Course 4:**
```
Course Code: ENG101
Course Name: English Composition
Credits: 3
Capacity: 35
Instructor: Prof. David Martinez
Schedule: Tue/Thu 10:00-11:30
Description: Academic writing, essay structure, research methods, and critical thinking.
Active: ✓ Checked
```

---

### 3️⃣ Create Announcements (Admin Dashboard → Announcements)

**URL:** `/admin/announcements`

**Example Global Announcement (All Students):**
```
Title: Welcome to Spring 2025 Semester!
Content: Classes begin on Monday, January 15th. Please check your course schedules and complete registration by Friday. Have a great semester!
Priority: High
Course: All Students (Global)
Active: ✓ Checked
```

**Example Course-Specific Announcement:**
```
Title: CS101 Midterm Exam Schedule
Content: The midterm exam will be held on February 20th at 2:00 PM in Room 304. The exam will cover chapters 1-5. Please bring your student ID and a pencil.
Priority: Urgent
Course: CS101 - Introduction to Programming
Active: ✓ Checked
```

**Example Normal Announcement:**
```
Title: Library Hours Extended
Content: The university library will now be open until 10 PM on weekdays to support student studying. Weekend hours remain 9 AM - 6 PM.
Priority: Normal
Course: All Students (Global)
Active: ✓ Checked
```

---

### 4️⃣ View Course Details & Enrolled Students

**How to Access:**
1. Go to `/admin/courses`
2. Click on **course name** (blue link) OR click the **eye icon (👁️)**
3. View detailed course information

**What You See:**
- ✅ **Course Overview:** Credits, enrolled count, schedule
- ✅ **Enrollment Status:** X/30 students (with capacity)
- ✅ **Student List Table:**
  - Student name & avatar
  - Student ID
  - Email
  - Current grade (if assigned)
  - Enrollment date
  - **Actions:**
    - **Assign/Edit Grade** button
    - **Drop Student** button

---

### 5️⃣ Assign Grades to Students

**Steps:**
1. Go to course details page (click course name)
2. Find student in the table
3. Click **"Assign Grade"** button
4. Enter grade (e.g., `A`, `B+`, `85`, `3.7`)
5. Click save ✓

**Grades are immediately visible to students on their dashboard!**

---

### 6️⃣ Drop a Student from Course

**Steps:**
1. Go to course details page
2. Find student in the table
3. Click **"Drop Student"** button (red)
4. Confirm action
5. Student's enrollment status changes to `DROPPED`

---

### 7️⃣ Manage Students (View All Students)

**URL:** `/admin/students`

**What You Can Do:**
- View all registered students
- See their Student ID, email
- Check total enrollments per student
- Delete student accounts (removes all enrollments)

---

## 👨‍🎓 STUDENT WORKFLOW

### 1️⃣ Register as Student
1. Go to **http://localhost:3000/register**
2. Fill in:
   - Name: `John Doe`
   - Email: `john@student.edu`
   - Password: `Student@123`
   - Account Type: **Student**
3. Click "Create Account"
4. **Note:** Student ID is auto-generated (e.g., `STU123456`)

---

### 2️⃣ Student Dashboard

**URL:** `/student/dashboard`

**What You See:**

**Top Statistics Cards:**
- 📚 **Enrolled Courses:** Total number
- 🎓 **Total Credits:** Sum of all enrolled course credits
- ⏰ **Available Courses:** Courses you can enroll in
- ✅ **Completed:** Finished courses (future feature)

**Announcements Section (Blue Box):**
- 🔴 **Urgent announcements** (red background)
- 🟠 **High priority announcements** (orange background)
- 🔵 **Normal announcements** (white background)
- Shows: Title, content, course (if specific), timestamp
- **Only shows:**
  - Global announcements (all students)
  - Announcements for courses you're enrolled in

**My Enrolled Courses Section:**
- Grid of course cards showing:
  - Course code and name
  - Description
  - Credits
  - Instructor
  - Schedule
  - **Grade** (if assigned by admin) - shown in green
  - Status badge (ACTIVE)

---

### 3️⃣ Browse & Enroll in Courses

**URL:** `/student/courses`

**Available Courses Section:**
- Shows courses you're **NOT** enrolled in
- Each card displays:
  - Course info (code, name, description)
  - Available seats: `15/30` 
    - **Green** = Seats available
    - **Red** = Course full
  - Instructor & schedule
  - **"Enroll Now"** button (or "Course Full" if at capacity)

**Enrolled Courses Section:**
- Shows courses you're **ALREADY** in
- Green checkmark badge
- **"Drop Course"** button

---

### 4️⃣ Enroll in a Course

**Steps:**
1. Go to `/student/courses`
2. Find course in "Available Courses"
3. Click **"Enroll Now"** button
4. ✅ Success! Course appears in "My Enrolled Courses"
5. Go to dashboard to see updated statistics

**What Happens:**
- Enrollment status: `ACTIVE`
- Credits added to your total
- Course capacity decreases
- You'll see course-specific announcements
- Admin can now assign you a grade

---

### 5️⃣ Drop a Course

**Steps:**
1. Go to `/student/courses` OR `/student/dashboard`
2. Find enrolled course
3. Click **"Drop Course"** button
4. Confirm action
5. Enrollment status changes to `DROPPED`
6. Course removed from dashboard

---

### 6️⃣ View Your Grades

**Where to See Grades:**
1. Go to `/student/dashboard`
2. Look at "My Enrolled Courses" section
3. Each course card shows:
   - **Grade:** A, B+, 85, etc. (in green)
   - **"Not assigned yet"** if admin hasn't graded

**Grades are assigned by admin and update in real-time!**

---

## 🎯 COMPLETE USAGE SCENARIO

### Scenario: Full Semester Workflow

**Day 1 - Admin Setup:**
```
1. Admin creates account
2. Admin adds 4 courses (CS101, CS102, MATH201, ENG101)
3. Admin posts welcome announcement (High priority, Global)
4. Admin posts library hours announcement (Normal, Global)
```

**Day 2 - Student Registration:**
```
5. John Doe registers as student → Gets STU123456
6. Jane Smith registers as student → Gets STU234567
7. Bob Johnson registers as student → Gets STU345678
```

**Day 3 - Course Enrollment:**
```
8. John logs in → Sees welcome announcement
9. John goes to Courses page
10. John enrolls in: CS101 (3 credits), MATH201 (4 credits)
11. John's dashboard shows: 2 courses, 7 total credits

12. Jane enrolls in: CS101, CS102, ENG101
13. Jane's dashboard shows: 3 courses, 10 total credits

14. Bob enrolls in: CS102, MATH201
15. Bob's dashboard shows: 2 courses, 8 total credits
```

**Day 4 - Admin Monitoring:**
```
16. Admin checks Courses page:
    - CS101: 2/30 enrolled (John, Jane)
    - CS102: 2/25 enrolled (Jane, Bob)
    - MATH201: 2/40 enrolled (John, Bob)
    - ENG101: 1/35 enrolled (Jane)

17. Admin clicks CS101 course name
18. Admin sees student list:
    - John Doe (STU123456)
    - Jane Smith (STU234567)
```

**Week 6 - Midterm Announcements:**
```
19. Admin creates announcement:
    Title: CS101 Midterm Exam Schedule
    Priority: Urgent
    Course: CS101 only
    
20. John and Jane see this announcement (they're in CS101)
21. Bob does NOT see it (he's not in CS101)
```

**Week 8 - Grading:**
```
22. Admin goes to CS101 course details
23. Admin assigns grades:
    - John Doe: A (clicked "Assign Grade", entered "A")
    - Jane Smith: B+ (clicked "Assign Grade", entered "B+")

24. John logs in → Dashboard shows "Grade: A" on CS101 card
25. Jane logs in → Dashboard shows "Grade: B+" on CS101 card
```

**Week 10 - Course Changes:**
```
26. Bob decides to drop CS102
27. Bob clicks "Drop Course" on CS102
28. CS102 status changes to DROPPED
29. Bob's dashboard now shows: 1 course, 4 credits (only MATH201)

30. Admin checks CS102 details → Only Jane Smith listed (Bob dropped)
```

**End of Semester:**
```
31. Admin assigns all remaining grades
32. All students can see their final grades on dashboard
33. Admin reviews audit log to see all actions taken
```

---

## 🔍 FEATURES SUMMARY

### ✅ Admin Features (Already Implemented)

| Feature | URL | Description |
|---------|-----|-------------|
| **Dashboard** | `/admin` | Overview stats, recent activity |
| **Course Management** | `/admin/courses` | CRUD operations for courses |
| **Course Details** | `/admin/courses/[id]` | View enrollments, assign grades, drop students |
| **Student Management** | `/admin/students` | View all students, delete accounts |
| **Announcements** | `/admin/announcements` | Create/delete announcements (global or course-specific) |
| **Grade Assignment** | Course details page | Inline grade editing for each student |
| **Drop Students** | Course details page | Remove students from courses |
| **Audit Logging** | Dashboard | Track all admin actions |

### ✅ Student Features (Already Implemented)

| Feature | URL | Description |
|---------|-----|-------------|
| **Dashboard** | `/student/dashboard` | Stats, announcements, enrolled courses, grades |
| **Course Catalog** | `/student/courses` | Browse and enroll in available courses |
| **Enrollment** | Courses page | One-click enrollment with capacity checking |
| **Drop Course** | Dashboard/Courses | Remove yourself from a course |
| **View Grades** | Dashboard | See grades assigned by admin |
| **Announcements** | Dashboard | See global and course-specific announcements |
| **Student ID** | Dashboard | Auto-generated unique ID (STU######) |

---

## 🎨 UI HIGHLIGHTS

### Navigation Bar
- **Sticky top header** (always visible)
- **Logo & branding** (SMS icon + name)
- **Role-specific menu:**
  - Admin: Dashboard, Courses, Students, Announcements
  - Student: Dashboard, Courses
- **User profile** (avatar with initials)
- **Logout button**

### Color Coding
- 🔴 **Red:** Urgent/Errors (URGENT announcements, full courses, delete actions)
- 🟠 **Orange:** Warnings (HIGH priority announcements)
- 🔵 **Blue:** Primary actions (links, enroll buttons, info)
- 🟢 **Green:** Success (grades, active status, available seats)
- ⚪ **Gray:** Neutral (descriptions, secondary info)

### Priority System (Announcements)
- **URGENT:** Red background, alert icon, high visibility
- **HIGH:** Orange background, alert icon
- **NORMAL:** White background, info icon

---

## 🔒 Security Features (Auto-Protected)

✅ **Password Requirements:** Min 8 chars, uppercase, lowercase, number, special char  
✅ **Rate Limiting:** 5 failed login attempts = 15-min lockout  
✅ **SQL Injection Prevention:** Prisma ORM (parameterized queries)  
✅ **XSS Protection:** React auto-escaping  
✅ **CSRF Protection:** Next.js built-in  
✅ **Role-Based Access Control:** Middleware enforces routes  
✅ **Secure Sessions:** httpOnly cookies, JWT encryption  
✅ **Password Hashing:** bcrypt with salt  
✅ **Audit Logging:** All admin actions tracked  

---

## 📊 Database Models

### User
- ID, name, email, password (hashed), role (ADMIN/STUDENT)
- Login attempts tracking, account lockout

### Profile
- Student ID (auto-generated: STU######)
- Linked to User (one-to-one)

### Course
- Code (unique), name, description, credits, capacity
- Instructor, schedule, active status

### Enrollment
- Links User to Course
- Status: ACTIVE, COMPLETED, DROPPED
- Grade field (assigned by admin)
- Prevents duplicate enrollments (unique constraint)

### Announcement
- Title, content, priority (NORMAL/HIGH/URGENT)
- Course-specific or global (null courseId = global)
- Active status (show/hide)

### AuditLog
- Tracks: CREATE, UPDATE, DELETE, ASSIGN_GRADE, DROP_STUDENT
- Admin user, timestamp, entity details

---

## 🎯 Testing Checklist

- [ ] Admin can create courses
- [ ] Admin can edit course details
- [ ] Admin can delete courses
- [ ] Admin can view enrolled students in course
- [ ] Admin can assign grades to students
- [ ] Admin can drop students from courses
- [ ] Admin can create global announcements
- [ ] Admin can create course-specific announcements
- [ ] Admin can delete announcements
- [ ] Student can register and login
- [ ] Student receives auto-generated Student ID
- [ ] Student can browse available courses
- [ ] Student can enroll in courses (with capacity check)
- [ ] Student cannot enroll in full courses
- [ ] Student cannot enroll twice in same course
- [ ] Student can drop courses
- [ ] Student can see their grades on dashboard
- [ ] Student sees global announcements
- [ ] Student sees announcements for their enrolled courses only
- [ ] Student does NOT see announcements for courses they're not in
- [ ] Navigation menu shows correct links for each role
- [ ] Unauthorized users cannot access protected routes
- [ ] Students cannot access admin routes
- [ ] Admins cannot access student routes
- [ ] Audit log records all admin actions

---

## 💡 Pro Tips

1. **Start with Admin Account:** Always create admin first to set up courses
2. **Capacity Management:** Set realistic capacities (e.g., 25-40 students per course)
3. **Use Priorities Wisely:** Reserve URGENT for exam dates, deadline changes
4. **Course-Specific Announcements:** Better than global for targeted communication
5. **Grade Format:** Use consistent format (e.g., all letter grades OR all numbers)
6. **Drop vs Delete:** Drop = student can re-enroll; Delete student = permanent removal
7. **Check Course Details:** Click course name in admin panel to see full enrollment list

---

## 🚀 What's Next? (Future Enhancements)

- [ ] Email notifications for announcements
- [ ] Course prerequisites
- [ ] Semester/term management
- [ ] Student transcript PDF export
- [ ] Assignment submissions
- [ ] Attendance tracking
- [ ] Waitlist for full courses
- [ ] Advanced search and filters
- [ ] Bulk student import (CSV)
- [ ] Grade analytics and GPA calculation
- [ ] Course materials upload
- [ ] Student profile editing
- [ ] Password reset flow
- [ ] Two-factor authentication

---

## 📞 Quick Reference

| Task | Role | URL |
|------|------|-----|
| Create course | Admin | `/admin/courses` |
| Assign grade | Admin | `/admin/courses/[courseId]` |
| Post announcement | Admin | `/admin/announcements` |
| Enroll in course | Student | `/student/courses` |
| View grades | Student | `/student/dashboard` |
| Drop course | Student | `/student/dashboard` or `/student/courses` |

---

**🎓 Your complete university portal is ready to use!**

Start by creating an admin account and adding courses. Then register students and let them enroll!

