-- CreateTable
CREATE TABLE "Sale" (
    "saleId" SERIAL NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("saleId")
);

-- CreateTable
CREATE TABLE "saleItem" (
    "saleItemId" SERIAL NOT NULL,
    "saleId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "saleItem_pkey" PRIMARY KEY ("saleItemId")
);
