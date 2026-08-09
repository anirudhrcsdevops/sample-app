const http = require('http');

http.createServer((req, res) => {
  res.end("sample application for testing 🚀");
}).listen(3000);
