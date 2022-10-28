import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main(){
  const post1 = await prisma.post.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update:{},
    create:{
      title:"post1",
      content:"this is post 1",
      published:false
    }
  })
  const post2 = await prisma.post.upsert({
    where: { title: 'Prisma Adds Support for MongoDBdf' },
    update:{},
    create:{
      title:"post2",
      content:"this is post 1",
      published:true
    }
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });