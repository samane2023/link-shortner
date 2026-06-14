import bcrypt from 'bcryptjs'
import { prisma } from '../src/lib/prisma'

async function main() {
  await prisma.linkTag.deleteMany()
  await prisma.clickEvent.deleteMany()
  await prisma.shortLink.deleteMany()
  await prisma.tag.deleteMany()
  await prisma.user.deleteMany()

  const adminPasswordHash = await bcrypt.hash('admin123456', 10)
  const userPasswordHash = await bcrypt.hash('user123456', 10)

  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      passwordHash: adminPasswordHash,
      role: 'ADMIN',
    },
  })

  const user = await prisma.user.create({
    data: {
      name: 'Normal User',
      email: 'user@example.com',
      passwordHash: userPasswordHash,
      role: 'USER',
    },
  })

  const workTag = await prisma.tag.create({
    data: {
      name: 'Work',
      color: '#2563eb',
      userId: user.id,
    },
  })

  const personalTag = await prisma.tag.create({
    data: {
      name: 'Personal',
      color: '#16a34a',
      userId: user.id,
    },
  })

  const link = await prisma.shortLink.create({
    data: {
      title: 'Next.js Website',
      originalUrl: 'https://nextjs.org',
      slug: 'nextjs',
      description: 'Official Next.js website',
      userId: user.id,
    },
  })

  await prisma.linkTag.createMany({
    data: [
      {
        linkId: link.id,
        tagId: workTag.id,
      },
      {
        linkId: link.id,
        tagId: personalTag.id,
      },
    ],
  })

  await prisma.clickEvent.createMany({
    data: [
      {
        linkId: link.id,
        referrer: 'https://google.com',
        userAgent: 'Mozilla/5.0',
        ipHash: 'sample-ip-hash-1',
      },
      {
        linkId: link.id,
        referrer: 'https://telegram.org',
        userAgent: 'Mozilla/5.0',
        ipHash: 'sample-ip-hash-2',
      },
    ],
  })

  console.log('Database seeded successfully')
  console.log('Admin:', admin.email, 'password: admin123456')
  console.log('User:', user.email, 'password: user123456')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
