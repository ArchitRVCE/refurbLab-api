import { pgTable, uuid, varchar, numeric, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  category_id: uuid('category_id').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(), // price as decimal number
  condition: varchar('condition', { length: 10 }).notNull(), // store as string ("new" or "used")
  description: text('description').default(''), // optional string
  image_url: text('image_url').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});
