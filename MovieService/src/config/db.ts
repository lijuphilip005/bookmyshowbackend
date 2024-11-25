import { config } from 'dotenv';
import {Pool} from 'pg'
import {drizzle} from 'drizzle-orm/node-postgres'
config()
// Create a new pool instance to manage connections

console.log(process.env.DB_PASSWORD)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST ,
  database: process.env.DB_NAME ,
  password: process.env.DB_PASSWORD ,
  port: Number(process.env.DB_PORT) 
});

// Function to execute queries
export const query = (text: string, params?: any[]) => pool.query(text, params);

const db = drizzle({ client: pool });


export const checkDbConnection = async () => {

    try {
      const client = await pool.connect();
      console.log("Database connected successfully!");
      client.release(); // Release the client back to the pool
    } catch (error) {
      console.error("Error connecting to the database:", error);
      process.exit(1); // Exit the process if the database is not connected
    }
  };

// Optional: Close the pool when the application terminates
export const closeConnection = async () => {
  await pool.end();
};

export default pool;
