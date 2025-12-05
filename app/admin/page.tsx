import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { Navbar } from '@/components/layout/navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, BookOpen, UserCheck, Activity } from 'lucide-react'

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/unauthorized')
  }

  const [totalStudents, totalCourses, totalEnrollments, recentActivity] = await Promise.all([
    prisma.user.count({ where: { role: 'STUDENT' } }),
    prisma.course.count(),
    prisma.enrollment.count({ where: { status: 'ACTIVE' } }),
    prisma.auditLog.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { name: true },
        },
      },
    }),
  ])

  const stats = [
    {
      title: 'Total Students',
      value: totalStudents,
      icon: Users,
      description: 'Registered students',
      color: 'bg-blue-500',
    },
    {
      title: 'Total Courses',
      value: totalCourses,
      icon: BookOpen,
      description: 'Available courses',
      color: 'bg-green-500',
    },
    {
      title: 'Active Enrollments',
      value: totalEnrollments,
      icon: UserCheck,
      description: 'Current enrollments',
      color: 'bg-purple-500',
    },
    {
      title: 'Recent Activities',
      value: recentActivity.length,
      icon: Activity,
      description: 'Last 10 actions',
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={session.user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {session.user.name}</p>
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
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest administrative actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No recent activity</p>
              ) : (
                recentActivity.map((log) => (
                  <div key={log.id} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {log.user.name} {log.action.toLowerCase()}d {log.entity.toLowerCase()}
                      </p>
                      <p className="text-xs text-gray-500">{log.details}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(log.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

