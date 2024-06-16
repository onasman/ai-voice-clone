import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  out: "./migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["ai-voice-cloning_*"],
} satisfies Config;
