import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const adminPassword = await bcrypt.hash('admin123', 10)
    const studentPassword = await bcrypt.hash('student123', 10)

    // Upsert Admin
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {}, // Don't update if exists, just ensure it's there. Or you could update password.
        create: {
            email: 'admin@example.com',
            name: 'System Administrator',
            password: adminPassword,
            role: 'ADMIN',
        },
    })
    console.log({ admin })

    // Upsert Student
    const student = await prisma.user.upsert({
        where: { email: 'student@example.com' },
        update: {},
        create: {
            email: 'student@example.com',
            name: 'Test Student',
            password: studentPassword,
            role: 'STUDENT',
            profile: {
                create: {
                    university: 'Age-Well University',
                    grade: '3rd Year',
                    motivation: 'Learning about gerontology design.'
                }
            }
        },
    })
    console.log({ student })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
