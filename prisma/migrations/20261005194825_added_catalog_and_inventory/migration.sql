-- CreateTable
CREATE TABLE "Catalog" (
    "productId" SERIAL NOT NULL,
    "barcode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "unitPrice" DECIMAL(10,2) NOT NULL,
    "minimumStockLevel" INTEGER NOT NULL,
    "expiryWarningPeriod" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "batchId" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitsPerBox" INTEGER NOT NULL,
    "expirationDate" DATE NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("batchId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Catalog_barcode_key" ON "Catalog"("barcode");
