const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello This is Tiru----------My Node.js app is running on EC2 instance and triggered to github webhook");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
