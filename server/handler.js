import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url); // Path to current file
const __dirname = path.dirname(__filename); // Path to server directory
// Method for loading html file for the client
export const loadPageHandler = async (req, res) => {
  try {
    // Path to index.html in public folder
    const htmlFile = path.resolve(__dirname, '..', 'client', 'public', 'index.html');
    const htmlData = await fs.readFile(htmlFile, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlData);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Failed to load HTML');
  }
};
// Method for loading css file for the client
export const loadCSSPageHandler = async (req, res) => {
  try {
    // Path to styles.css in public folder
    const cssFile = path.resolve(__dirname, '..', 'client', 'public', 'styles.css');
    const cssData = await fs.readFile(cssFile, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(cssData);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Failed to load CSS');
  }
}
// Method for loading js file for the client
export const loadJSPageHandler = async (req, res) => {
  try {
    // Path to app.js in src folder
    const jsFile = path.resolve(__dirname, '..', 'client', 'src', 'app.js');
    const jsData = await fs.readFile(jsFile, 'utf8');
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(jsData);
  } catch (error) { 
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Failed to load JS');
  }
}