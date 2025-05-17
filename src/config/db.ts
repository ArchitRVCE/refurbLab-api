import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const db = drizzle(pool);

// Initialize DB connection
export const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to Postgres database ✅');
  } catch (error) {
    console.error('Failed to connect to database ❌', error);
  }
};
