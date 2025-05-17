import { pgTable, serial, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  password_hash: text('password_hash').notNull(),
  role: varchar('role', { length: 50 }).notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});
