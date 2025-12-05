import { RegisterForm } from '@/components/auth/register-form'
import Link from 'next/link'
import { GraduationCap, UserPlus, ArrowLeft, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="relative">
          <Link href="/" className="inline-flex items-center text-white mb-12 hover:text-blue-200 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-indigo-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">University Portal</h1>
              <p className="text-purple-200 text-sm">Student Management System</p>
            </div>
          </div>
        </div>
        
        <div className="relative space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-purple-100 text-lg mb-6">
              Create your account and start your academic journey with us today.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              'Access to all available courses',
              'Real-time enrollment tracking',
              'Personalized student dashboard',
              'Secure account management',
              '24/7 portal access',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-purple-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-purple-200 text-sm">
          <p>&copy; 2025 University Portal. All rights reserved.</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <UserPlus className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 text-sm">Join University Portal</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Register</h2>
              <p className="text-gray-600">Create your account to get started.</p>
            </div>
            <RegisterForm />
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-600 font-semibold hover:text-indigo-700">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

