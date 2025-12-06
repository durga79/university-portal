# 🔐 Admin Setup & User Management Guide

## 🎯 Security Model

This application uses a **secure admin model** where:

- ❌ **NO public admin registration** - Admins cannot create themselves
- ✅ **Only students can register publicly** via `/register`
- ✅ **Admins can only be created by existing admins** via admin panel
- ✅ **First admin created via seed script** (one-time setup)

---

## 🚀 First-Time Setup

### Step 1: Create First Admin Account

Run the seed script to create the initial administrator:

```bash
pnpm db:seed
```

**This creates:**
- **Email**: `admin@university.edu`
- **Password**: `Admin@123`
- **Role**: `ADMIN`

⚠️ **IMPORTANT**: Change this password immediately after first login!

---

## 🔑 Admin Login

1. Go to: `http://localhost:3000/login`
2. Login with:
   - **Email**: `admin@university.edu`
   - **Password**: `Admin@123`
3. You'll be redirected to the admin dashboard

---

## 👥 Creating Additional Users (Admin Panel)

Once logged in as admin, you can create more users:

### Navigate to User Management

```
Admin Dashboard → Users (in navbar)
```

Or directly: `http://localhost:3000/admin/users`

### Create New User Form

Fill out the form:

```
Full Name: John Doe
Email: john.doe@university.edu
Password: TempPass123
Role: [Student / Administrator]
```

Click **Create User** ✅

### Who Can Create Users?

- ✅ **ADMIN** - Can create both students AND admins
- ❌ **STUDENT** - Cannot create any users
- ❌ **PUBLIC** - Can only create student accounts via `/register`

---

## 🎓 Student Registration (Public)

Students can self-register:

1. Go to: `http://localhost:3000/register`
2. Fill out the form
3. **Role is automatically set to STUDENT** (no option to choose)
4. After registration, redirect to login

### What Changed?

**Before (Insecure):**
```jsx
// Public registration had role selector
<select>
  <option value="STUDENT">Student</option>
  <option value="ADMIN">Administrator</option>  ❌ REMOVED
</select>
```

**After (Secure):**
```jsx
// Public registration ONLY creates students
role: 'STUDENT'  // Hardcoded, no user input
```

---

## 🛡️ Security Features

### 1. API Protection

**Public Registration API** (`/api/register`):
```typescript
if (role === 'ADMIN') {
  return NextResponse.json(
    { error: 'Admin accounts cannot be created through public registration.' },
    { status: 403 }
  )
}
```

**Admin User Creation API** (`/api/admin/create-user`):
```typescript
if (!session || session.user.role !== 'ADMIN') {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
}
```

### 2. Audit Logging

All admin user creations are logged:
```typescript
await createAuditLog(
  session.user.id,
  'CREATE',
  'USER',
  user.id,
  `Created new ${role} account for ${email}`
)
```

### 3. Password Security

- Minimum 8 characters
- Hashed with bcrypt (12 rounds)
- Users can change passwords after login

---

## 📊 User Management Dashboard

### Features

**Statistics Cards:**
- Total Users
- Administrator Count
- Student Count

**User Table:**
- Name & Student ID
- Email
- Role Badge
- Enrollment Count

**Create User Form:**
- Add new students or admins
- Real-time validation
- Success/Error feedback

---

## 🔄 Workflow Examples

### Example 1: Add a New Student (Admin Method)

```
1. Admin logs in
2. Clicks "Users" in navbar
3. Fills form:
   - Name: Alice Johnson
   - Email: alice@university.edu
   - Password: Welcome2024
   - Role: Student
4. Clicks "Create User"
5. Alice can now login and enroll in courses
```

### Example 2: Add a New Admin

```
1. Existing admin logs in
2. Goes to Users page
3. Fills form:
   - Name: Bob Smith
   - Email: bob.admin@university.edu
   - Password: SecureAdmin456
   - Role: Administrator
4. Clicks "Create User"
5. Bob can now login and manage the system
```

### Example 3: Student Self-Registration

```
1. Student visits /register
2. Fills form (no role selector visible)
3. Automatically becomes STUDENT
4. Cannot elevate to admin
5. Needs admin to upgrade if necessary
```

---

## ⚙️ Database Schema

### User Table
```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  role      Role     @default(STUDENT)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  profile     Profile?
  enrollments Enrollment[]
}

enum Role {
  STUDENT
  ADMIN
}
```

---

## 🚨 Troubleshooting

### "Email already registered"
- User with that email exists
- Try a different email or delete the existing user

### "Unauthorized" when creating users
- You must be logged in as ADMIN
- Students cannot access `/admin/users`

### Cannot login as admin
- Check credentials: `admin@university.edu` / `Admin@123`
- Run seed script if admin doesn't exist: `pnpm db:seed`

### Forgot admin password
- Option 1: Create new admin via existing admin
- Option 2: Reset in database manually
- Option 3: Re-run seed script (if first admin)

---

## 🎯 Best Practices

1. **Change Default Password**
   - First admin should change `Admin@123` immediately

2. **Create Specific Admins**
   - Don't share admin accounts
   - Create individual admin accounts for each person

3. **Use Strong Passwords**
   - Minimum 8 characters
   - Mix of uppercase, lowercase, numbers, symbols

4. **Regular Audits**
   - Check audit logs regularly
   - Review who's creating users

5. **Principle of Least Privilege**
   - Only create admin accounts when necessary
   - Most users should be students

---

## 📝 Summary

| **Action** | **Who Can Do It** | **Where** |
|------------|-------------------|-----------|
| Create First Admin | System (seed script) | `pnpm db:seed` |
| Create Additional Admins | Existing Admin | `/admin/users` |
| Create Students (Admin) | Admin | `/admin/users` |
| Create Students (Self) | Anyone | `/register` |
| Create Admins (Public) | ❌ Nobody | Blocked |

---

**🎉 Your student management system is now secure and ready to use!**

