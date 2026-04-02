const http = require('http');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.end("This is Tiru from Terminal my app is going onlineeeeeeeeeeeeee");
  }

  else if (req.url === "/health") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: "UP",
      uptime: process.uptime(),
      timestamp: new Date()
    }));
  }

  else if (req.url === "/system") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      hostname: os.hostname(),
      platform: os.platform(),
      cpus: os.cpus().length,
      memory: `${Math.round(os.freemem()/1024/1024)} MB free`
    }));
  }

  else {
    res.writeHead(404);
    res.end("Route Not Found ❌");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
