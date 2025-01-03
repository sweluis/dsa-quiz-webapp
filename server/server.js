import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.SERVER_PORT;
import { loadPageHandler, loadCSSPageHandler, loadJSPageHandler } from './handler.js';
import { getRandomQuestion } from './service.js';

const server = http.createServer(async (req, res) => {
  console.log(`${req.method} request for ${req.url}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.method ==='GET' && req.url === '/') {
    loadPageHandler(req, res);
  } else if(req.method === 'GET' && req.url === '/styles.css') {
    loadCSSPageHandler(req, res);
  } else if(req.method === 'GET' && req.url === '/app.js') {
    loadJSPageHandler(req, res);
  }
  else if(req.method === 'GET' && req.url === '/question-from-database') {
    const question = await getRandomQuestion();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(question));
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});