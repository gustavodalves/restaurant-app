-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_plates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "category_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "plates_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_plates" ("category_id", "created_at", "description", "id", "name", "price") SELECT "category_id", "created_at", "description", "id", "name", "price" FROM "plates";
DROP TABLE "plates";
ALTER TABLE "new_plates" RENAME TO "plates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
