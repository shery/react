const http = require('http');

function start() {
  http.createServer((req, res) => {
  console.log("Request received.");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('restart ++');
    res.end();
  }).listen(8880);

  console.log("Server has started.");
}

exports.start = start;
