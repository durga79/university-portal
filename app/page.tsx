import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Shield, Users, BookOpen } from 'lucide-react'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Student Management System</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Secure Student Management Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A role-based web application with enterprise-level security features for managing students, courses, and enrollments
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: 'Secure Authentication',
              description: 'Password hashing, session management, and account lockout protection',
            },
            {
              icon: Users,
              title: 'Role-Based Access',
              description: 'Separate dashboards for administrators and students with controlled permissions',
            },
            {
              icon: BookOpen,
              title: 'Course Management',
              description: 'Full CRUD operations for courses with enrollment tracking',
            },
            {
              icon: GraduationCap,
              title: 'Student Portal',
              description: 'Browse courses, enroll, and track academic progress',
            },
          ].map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Security Features Implemented</CardTitle>
            <CardDescription className="text-blue-100">
              Built with industry-standard security practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'SQL Injection Prevention (Prisma ORM)',
                'Cross-Site Scripting (XSS) Protection',
                'CSRF Token Validation',
                'Password Strength Validation',
                'Bcrypt Password Hashing',
                'Rate Limiting & Account Lockout',
                'Secure Session Management',
                'Audit Logging for Admin Actions',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          <p>Built with Next.js, TypeScript, Prisma, and Neon PostgreSQL</p>
          <p className="text-sm mt-2">Secure Software Engineering Project</p>
        </div>
      </footer>
    </div>
  )
}
