// server.js
import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;
const BASE = './dist/src';
const CIRCUITPYTHON_PATH = '/resources/plugin/question/circuitpython';

const server = http.createServer((req, res) => {
  const url = req.url === '/' ? '/index.html' : req.url;

  // Serve index.html from local file (circuitpython.html renamed)
  if (url === '/index.html') {
    const filePath = path.join(BASE, 'main/resources/templates/fragments/question/circuitpython.html');
    serveFile(filePath, 'text/html', res);
    return;
  }

  // Serve JS/CSS assets from circuitpython build
  if (url.startsWith(CIRCUITPYTHON_PATH)) {
    const filePath = path.join(BASE, 'main/webapp', url);
    const ext = path.extname(filePath);
    const contentType = {
      '.js': 'text/javascript',
      '.css': 'text/css',
    }[ext] || 'application/octet-stream';
    serveFile(filePath, contentType, res);
    return;
  }

  
  // Redirect /resource (not /resources) to learn.mycode.run
  if (url.startsWith('/resource')) {
    res.writeHead(302, { Location: `https://learn.mycode.run${url}` });
    res.end();
    return;
  }

  // Fallback 404
  res.writeHead(404);
  res.end('Not found');
});

function serveFile(filePath, contentType, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
