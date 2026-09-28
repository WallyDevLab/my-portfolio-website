import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Next.js conventionally loads .env.local for local secrets (see .env.example),
// but plain "dotenv/config" only reads .env — so the Prisma CLI (migrate, db
// pull, studio) never saw DATABASE_URL. Load .env.local explicitly here.
config({ path: ".env.local" });

export default defineConfig({
  schema: "./prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
