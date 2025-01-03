import url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
import db from './db.js'; // PostgreSQL connection setup

export async function getRandomQuestion() {
  const query = `
    SELECT * FROM questions
    ORDER BY RANDOM()
    LIMIT 1;
  `;
  try {
    const result = await db.query(query);
    return result.rows[0]; // Return a single random question
  } catch (error) {
    console.error('Error fetching random question:', error);
    throw error;
  }
}

