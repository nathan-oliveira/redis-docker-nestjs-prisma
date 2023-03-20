import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient();

async function run() {
  await prisma.user.deleteMany();

  const promises = [];

  for (let i = 0; i < 20; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.findName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      })
    );
  }

  await Promise.all(promises);
}

run()
  .catch((e) => {
    console.log(e)
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
