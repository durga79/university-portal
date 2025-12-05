import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, CheckCircle, Clock, GraduationCap } from 'lucide-react'

export default async function StudentDashboard() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'STUDENT') {
    redirect('/unauthorized')
  }

  const [profile, enrollments, availableCourses] = await Promise.all([
    prisma.profile.findUnique({
      where: { userId: session.user.id },
    }),
    prisma.enrollment.findMany({
      where: { 
        userId: session.user.id,
        status: 'ACTIVE'
      },
      include: {
        course: true,
      },
      orderBy: { enrolledAt: 'desc' },
    }),
    prisma.course.count({ where: { isActive: true } }),
  ])

  const totalCredits = enrollments.reduce((sum, e) => sum + e.course.credits, 0)

  const stats = [
    {
      title: 'Enrolled Courses',
      value: enrollments.length,
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Credits',
      value: totalCredits,
      icon: GraduationCap,
      color: 'bg-green-500',
    },
    {
      title: 'Available Courses',
      value: availableCourses,
      icon: Clock,
      color: 'bg-purple-500',
    },
    {
      title: 'Completed',
      value: 0,
      icon: CheckCircle,
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={session.user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {session.user.name}</p>
          {profile?.studentId && (
            <p className="text-sm text-gray-500 mt-1">Student ID: {profile.studentId}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Enrolled Courses</CardTitle>
            <CardDescription>Courses you are currently enrolled in</CardDescription>
          </CardHeader>
          <CardContent>
            {enrollments.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">You haven&apos;t enrolled in any courses yet</p>
                <a href="/student/courses" className="text-blue-600 hover:underline">
                  Browse available courses
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {enrollments.map((enrollment) => (
                  <div
                    key={enrollment.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{enrollment.course.name}</h3>
                        <p className="text-sm text-gray-600">{enrollment.course.code}</p>
                      </div>
                      <Badge variant="success">{enrollment.status}</Badge>
                    </div>
                    {enrollment.course.description && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {enrollment.course.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{enrollment.course.credits} Credits</span>
                      {enrollment.course.instructor && (
                        <span>Instructor: {enrollment.course.instructor}</span>
                      )}
                    </div>
                    {enrollment.course.schedule && (
                      <p className="text-xs text-gray-500 mt-2">{enrollment.course.schedule}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

