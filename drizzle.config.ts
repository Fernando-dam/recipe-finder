import { config } from 'dotenv'

config({ path: '.env.local' })

import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'file:./recipes.db',
  },
})
