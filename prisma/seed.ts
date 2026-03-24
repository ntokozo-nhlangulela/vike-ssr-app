import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({
    data: [
      { name: "Laptop", price: 10000 },
      { name: "Phone", price: 5000 },
      { name: "Keyboard", price: 100 }
    ]
  });

}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });