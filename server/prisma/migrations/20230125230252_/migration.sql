-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders_plates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" INTEGER NOT NULL DEFAULT 1,
    "plate_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    CONSTRAINT "orders_plates_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "orders_plates_plate_id_fkey" FOREIGN KEY ("plate_id") REFERENCES "plates" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders_plates" ("id", "order_id", "plate_id") SELECT "id", "order_id", "plate_id" FROM "orders_plates";
DROP TABLE "orders_plates";
ALTER TABLE "new_orders_plates" RENAME TO "orders_plates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
