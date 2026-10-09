import "dotenv/config";
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {

    await prisma.$transaction([
        prisma.saleItem.deleteMany(),
        prisma.inventory.deleteMany(),
        prisma.sale.deleteMany(),
        prisma.catalog.deleteMany(),
        prisma.user.deleteMany()
    ])

     const Razan = await prisma.user.create({
       data: {
        name: "Razan",
        username: "razan1",
        passwordHash: "rawvetyii"
       }
   })

   const John= await prisma.user.create({
    data:{
        name:"john",
        username:"john34",
        passwordHash:"hojn234"

    }
   })

   const Ali= await  prisma.user.create({
    data:{
        name:"Ali",
        username:"Ali45",
        role:"ADMIN",
        passwordHash:"al45yui%"
    }
   })

   const Nora= await prisma.user.create({
    data:{
        name:"Nora",
        username:"nora12",
        role:"ADMIN",
        passwordHash:"wnjend34Nra"
    }
   })




const milk = await prisma.catalog.create({
  data: {
    name: "Milk",
    barcode: "5281001234567",
    category: "Dairy",
    unitPrice: 2.50,
    minimumStockLevel: 20,
    expiryWarningPeriod: 30
  }
});

const bread = await prisma.catalog.create({
  data: {
    name: "Bread",
    barcode: "5281002345678",
    category: "Bakery",
    unitPrice: 1.50,
    minimumStockLevel: 15,
    expiryWarningPeriod: 3
  }
});

const cocaCola = await prisma.catalog.create({
  data: {
    name: "Coca-Cola",
    barcode: "5449000000996",
    category: "Beverages",
    unitPrice: 1.00,
    minimumStockLevel: 30,
    expiryWarningPeriod: 30
  }
});

const rice = await prisma.catalog.create({
  data: {
    name: "Rice",
    barcode: "5281003456789",
    category: "Grocery",
    unitPrice: 4.50,
    minimumStockLevel: 10,
    expiryWarningPeriod: 60
  }
});

const shampoo = await prisma.catalog.create({
  data: {
    name: "Shampoo",
    barcode: "5281004567890",
    category: "Personal Care",
    unitPrice: 5.54,
    minimumStockLevel: 10,
    expiryWarningPeriod: 90
  }
});


await prisma.inventory.createMany({
  data: [
    {
      productId: milk.productId,
      quantity: 120,
      unitsPerBox: 8,
      expirationDate: new Date("2026-11-15")
    },
    {
      productId: milk.productId,
      quantity: 120,
      unitsPerBox: 8,
      expirationDate: new Date("2026-12-04")
    },
    {
      productId: bread.productId,
      quantity: 20,
      unitsPerBox: 10,
      expirationDate: new Date("2027-01-15")
    },
    {
      productId: cocaCola.productId,
      quantity: 60,
      unitsPerBox: 15,
      expirationDate: new Date("2027-04-20")
    }
  ]
});


const sale1 = await prisma.sale.create({
  data: {
    userId: Razan.userId,
    total: 6.00
  }
});

const sale2 = await prisma.sale.create({
  data: {
    userId: John.userId,
    total: 11.00
  }
});

const sale3 = await prisma.sale.create({
  data: {
    userId: Ali.userId,
    total: 14.54
  }
});


await prisma.saleItem.createMany({
  data: [
    {
      saleId: sale1.saleId,
      quantity: 2,
      productId: milk.productId,
      unitPrice: 2.50
    },
    {
      saleId: sale1.saleId,
      quantity: 1,
      productId: cocaCola.productId,
      unitPrice: 1.00
    },
    {
      saleId: sale2.saleId,
      quantity: 2,
      productId: milk.productId,
      unitPrice: 2.50
    },
    {
      saleId: sale2.saleId,
      quantity: 1,
      productId: bread.productId,
      unitPrice: 1.50
    },
    {
      saleId: sale2.saleId,
      quantity: 1,
      productId: rice.productId,
      unitPrice: 4.50
    },
    {
      saleId: sale3.saleId,
      quantity: 1,
      productId: shampoo.productId,
      unitPrice: 5.54
    },
    {
      saleId: sale3.saleId,
      quantity: 2,
      productId: rice.productId,
      unitPrice: 4.50
    }
  ]
});





}

main().then(async()=>{
 console.log("seeding worked successfully")
}).catch(async (e)=>{
    console.error(e)
}).finally(async ()=>{
  await prisma.$disconnect();
})