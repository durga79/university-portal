import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { GraduationCap, Shield, Users, BookOpen, ArrowRight, CheckCircle, Award, Globe, Clock } from 'lucide-react'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-blue-900" />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white">University Portal</h1>
                <p className="text-xs text-blue-200">Student Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-700/50 px-4 py-2 rounded-full text-sm mb-6">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Secure • Reliable • Modern
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Welcome to Your <span className="text-blue-300">Academic Portal</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Access your courses, manage enrollments, and track your academic journey with our secure, role-based management platform.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Link href="/register">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/login">Student Login</Link>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-blue-200">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-blue-200">Secure</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <Shield className="w-10 h-10 text-blue-300" />
                    <div>
                      <h3 className="font-semibold">Enterprise Security</h3>
                      <p className="text-sm text-blue-200">Bank-level encryption</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <Clock className="w-10 h-10 text-blue-300" />
                    <div>
                      <h3 className="font-semibold">24/7 Access</h3>
                      <p className="text-sm text-blue-200">Anytime, anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <Award className="w-10 h-10 text-blue-300" />
                    <div>
                      <h3 className="font-semibold">Track Progress</h3>
                      <p className="text-sm text-blue-200">Real-time updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portal Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your academic journey in one secure platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Student Dashboard',
                description: 'View your courses, grades, and enrollment status',
                color: 'bg-blue-500',
              },
              {
                icon: BookOpen,
                title: 'Course Catalog',
                description: 'Browse and enroll in available courses',
                color: 'bg-green-500',
              },
              {
                icon: Award,
                title: 'Progress Tracking',
                description: 'Monitor your academic achievements',
                color: 'bg-purple-500',
              },
              {
                icon: Globe,
                title: 'Admin Portal',
                description: 'Comprehensive management for administrators',
                color: 'bg-orange-500',
              },
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow group">
                  <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Your data is protected with industry-leading security measures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'SQL Injection Prevention',
                'XSS Protection',
                'CSRF Token Validation',
                'Password Encryption',
                'Session Management',
                'Account Lockout',
                'Audit Logging',
                'Role-Based Access',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students managing their academic journey through our secure portal
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/register">
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-lg">University Portal</span>
              </div>
              <p className="text-gray-400 text-sm">
                Secure student management system built with modern web technologies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/login" className="hover:text-white">Student Login</Link></li>
                <li><Link href="/register" className="hover:text-white">Register</Link></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Next.js 16</li>
                <li>TypeScript</li>
                <li>Prisma ORM</li>
                <li>Neon PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 University Portal. Secure Software Engineering Project.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
