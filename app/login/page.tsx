import { LoginForm } from '@/components/auth/login-form'
import Link from 'next/link'
import { GraduationCap, Shield, ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="relative">
          <Link href="/" className="inline-flex items-center text-white mb-12 hover:text-blue-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-blue-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">University Portal</h1>
              <p className="text-blue-200 text-sm">Student Management System</p>
            </div>
          </div>
        </div>
        
        <div className="relative space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome Back!
            </h2>
            <p className="text-blue-100 text-lg">
              Access your personalized dashboard to manage courses, view grades, and track your academic progress.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Secure Authentication</h3>
                <p className="text-blue-200 text-sm">Your data is protected with enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-blue-200" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Personalized Dashboard</h3>
                <p className="text-blue-200 text-sm">Access your courses and academic information instantly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative text-blue-200 text-sm">
          <p>&copy; 2025 University Portal. All rights reserved.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">University Portal</h1>
            <p className="text-gray-600 text-sm">Student Management System</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600">Welcome back! Please enter your credentials.</p>
            </div>
            <LoginForm />
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-blue-600 font-semibold hover:text-blue-700">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

