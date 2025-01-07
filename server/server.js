import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.SERVER_PORT || 5500;
import { loadPageHandler, loadCSSPageHandler, loadJSPageHandler } from './handler.js';
import { getRandomQuestion } from './service.js';

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.method ==='GET' && req.url === '/') {  // Loads the index.html file for base url
    loadPageHandler(req, res);
  } else if(req.method === 'GET' && req.url === '/styles.css') {  // Loads css file for index.html
    loadCSSPageHandler(req, res);
  } else if(req.method === 'GET' && req.url === '/app.js') {  // Loads js file for index.html
    loadJSPageHandler(req, res);
  }
  // Scenario for when client requests a question from the database
  else if(req.method === 'GET' && req.url === '/question-from-database') {
    const question = await getRandomQuestion();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(question));  // Sends the question object as a JSON string
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});