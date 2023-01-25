/*
  Warnings:

  - You are about to drop the `customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `establishemnts` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `orders_plates` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `orders_plates` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "customers_user_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "customers";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "establishemnts";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders_plates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "plate_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    CONSTRAINT "orders_plates_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_plates_plate_id_fkey" FOREIGN KEY ("plate_id") REFERENCES "plates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders_plates" ("order_id", "plate_id") SELECT "order_id", "plate_id" FROM "orders_plates";
DROP TABLE "orders_plates";
ALTER TABLE "new_orders_plates" RENAME TO "orders_plates";
CREATE INDEX "orders_plates_order_id_plate_id_idx" ON "orders_plates"("order_id", "plate_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
