import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const migrationClient = postgres(env.DATABASE_URL, { max: 1 });
await migrate(drizzle(migrationClient), { migrationsFolder: "migrations" });
