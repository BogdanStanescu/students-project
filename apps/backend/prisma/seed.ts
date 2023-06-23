import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  const jim = await prisma.student.create({
    data: {
      id: uuid(),
      first_name: 'Jim',
      last_name: 'Hawkins',
      check_in_time: new Date('2021-02-15T19:35:00.000Z'),
    },
  });

  const sally = await prisma.student.create({
    data: {
      id: uuid(),
      first_name: 'Sally',
      last_name: 'Ride',
      check_in_time: new Date('2021-02-18T16:39:00.000Z'),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
