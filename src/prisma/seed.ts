import { Prisma } from '@prisma/client'
import prisma from '.'

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
  },
]

async function main() {
  console.log('Start seeding ...')
  const users = await Promise.all(userData.map(user => prisma.user.create({ data: user })))
  console.log(`Created ${users.length} users`)
  console.log('Users', users)
  console.log('Seeding finished.')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
