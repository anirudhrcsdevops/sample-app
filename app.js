const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from EKS using bitbucket pipeline 🚀");
}).listen(3000);
