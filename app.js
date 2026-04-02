const http = require('http');

const PORT = 3000;
const VERSION = "v1.0.1";
const startTime = new Date();

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
    <head>
      <title>CI/CD Project</title>
      <style>
        body {
          font-family: Arial;
          text-align: center;
          background: linear-gradient(135deg, #1e3a8a, #0f172a);
          color: white;
          padding-top: 100px;
        }
        .card {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 15px;
          display: inline-block;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        h1 { color: #38bdf8; }
        .green { color: #22c55e; }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>CI/CD Live App</h1>
        <p><b>Version:</b> ${VERSION}</p>
        <p><b>Deployed At:</b> ${startTime.toLocaleString()}</p>
        <p class="green"><b>Status:</b> Running </p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
