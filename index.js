'use strict';

const http = require('http');
const routes = require('./src/router');
const response = require('./src/response');

const hostname = '0.0.0.0';
const port = 3000;

routes.get('/', (req, res) => {
  return response.text(res, 'Hi!');
});

routes.get('/hello-world', (req, res) => {
  return response.json(res, { message: 'Hello World' });
});

routes.get('/healthcheck', (req, res) => {
  return response.json(res, { message: "I'm still here!" });
});

routes.get('/crash-me', (req, res) => {
  throw new Error('I like to crash and burn...');
});

const server = http.createServer((req, res) => {
  return routes.route(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
