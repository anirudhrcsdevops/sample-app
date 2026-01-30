const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from EKS using AWS Codepipeline 🚀");
}).listen(3000);
