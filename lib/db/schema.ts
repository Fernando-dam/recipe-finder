import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const recipes = sqliteTable('recipes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  mealId: text('meal_id').unique().notNull(),
  name: text('name').notNull(),
  image: text('image'),
  category: text('category'),
  cuisine: text('cuisine'),
  instructions: text('instructions'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export const favorites = sqliteTable('favorites', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  mealId: text('meal_id').notNull(),
  name: text('name').notNull(),
  image: text('image'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})
