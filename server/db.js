import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

// PostgreSQL connection configuration
const pool = new Pool({
  user: process.env.DB_USER,        // Database username
  host: 'localhost',            // Database host
  database: process.env.DB_NAME,  //Database name
  password: process.env.DB_PASSWORD,    // Database password
  port: 5433,                   // Default PostgreSQL port
});

export default pool;