import url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
import db from './db.js'; // PostgreSQL connection setup

// Fetch a trivia question random question from the database
export async function getRandomQuestion() {
  const query = `
    SELECT * FROM questions
    ORDER BY RANDOM()
    LIMIT 1;
  `;
  try {
    const result = await db.query(query); // Excute query to get one row from the database
    return result.rows[0]; // Returns object that is one question from the database
  } catch (error) {
    console.error('Error fetching random question:', error);
    throw error;
  }
}

