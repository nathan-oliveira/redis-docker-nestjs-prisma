nest new redis_nestjs

yarn add prisma tsx @faker-js/faker -D
yarn add @prisma/client

npx prisma init --datasource-provider SQLite

npx prisma migrate dev
npx prisma db seed

yarn add ioredis
