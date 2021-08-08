const http = require("http");
const path = require("path");
const fs = require("fs");
const calculator = require("./calculator");

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content);
      }
    );
  }

  if (request.url === '/calculator') {
    var a=90;
    var b=459;
    console.log("Addition of 50 and 10 is "+ calculator.addtion(a,b));

  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
