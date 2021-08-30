const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h2>welcome to index page</h2>');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h2>welcome to about page</h2>');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h2>welcome to contact page</h2>');
  } else {
    // if any url are not correct
    res.writeHead(404, { 'Contet-type': 'text/html' });
    res.write('<h2>404 page not found</h2>');
  }
  console.log('a request has been sent');
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server started has been sent ${port}`);
});
