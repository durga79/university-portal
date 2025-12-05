# 🚀 Quick Start Guide

## ✅ Your Student Portal is Ready!

### 📍 Project Location
```
~/student-management-system
```

### 🎯 Start the Application

```bash
cd ~/student-management-system
npm run dev
```

Then open: **http://localhost:3000**

### 🔑 Default Access

**Register a new account:**
- Click "Get Started" or "Register"
- Choose account type: Student or Administrator
- Use any email (e.g., `student@university.edu`)
- Password must have: 8+ chars, uppercase, lowercase, number, special character

### 🎨 Features

#### ✨ Homepage (/)
- Beautiful card-based layout
- Quick links sidebar
- System status indicator
- Course catalog preview

#### 👤 Student Features
- Personal dashboard
- Browse available courses
- Enroll in courses
- Drop enrolled courses
- View enrollment status

#### 👨‍💼 Admin Features
- System statistics dashboard
- Create/Edit/Delete courses
- Manage students
- View audit logs
- Track enrollments

### 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Database**: Neon PostgreSQL
- **ORM**: Prisma 5
- **Authentication**: NextAuth.js
- **Security**: bcrypt, CSRF protection, SQL injection prevention

### 🔧 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database commands
npx prisma studio          # Open database GUI
npx prisma migrate dev     # Run migrations
npx prisma generate        # Regenerate Prisma Client
```

### 🐛 Troubleshooting

**If styles don't show up:**
```bash
rm -rf .next node_modules/.cache
npm run dev
```

**If database connection fails:**
- Check `.env` file has correct `DATABASE_URL`
- Run `npx prisma generate`
- Run `npx prisma db push`

**If build errors occur:**
```bash
rm -rf .next .turbo
npm run build
```

### 📚 Documentation

- `README.md` - Complete project documentation
- `SECURITY.md` - Security features and testing
- `TESTING.md` - Test cases and procedures
- `PROJECT_SUMMARY.md` - Executive summary

### 🎓 Academic Use

This project demonstrates:
- ✅ Secure software development lifecycle
- ✅ OWASP Top 10 vulnerability prevention
- ✅ Role-based access control (RBAC)
- ✅ Enterprise-level security practices
- ✅ Modern web development technologies
- ✅ Clean code architecture

### 🌐 Live URLs

- **Homepage**: http://localhost:3000
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Admin Dashboard**: http://localhost:3000/admin (after login as admin)
- **Student Dashboard**: http://localhost:3000/student/dashboard (after login as student)

---

**🎉 Enjoy your fully functional Student Management Portal!**

