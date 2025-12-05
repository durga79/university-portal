import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { registerSchema } from '@/lib/validators'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedFields = registerSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validatedFields.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, password, role } = validatedFields.data

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    })

    await prisma.profile.create({
      data: {
        userId: user.id,
        studentId: role === 'STUDENT' ? `STU${Date.now().toString().slice(-6)}` : null,
      },
    })

    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'An error occurred during registration' },
      { status: 500 }
    )
  }
}

