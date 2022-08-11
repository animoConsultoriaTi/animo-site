-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "methodology" TEXT NOT NULL,
    "help" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "services_slug_key" ON "services"("slug");
