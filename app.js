const http = require('http');

const PORT = 3000;

const APP_VERSION = "v1.0.0";

let requestCount = 0;
const deployedAt = new Date();

const server = http.createServer((req, res) => {
  requestCount++;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>CI/CD Project</title>
        <style>
          body {
            font-family: Arial;
            text-align: center;
            background: #0f172a;
            color: white;
            padding-top: 50px;
          }
          .box {
            background: #1e293b;
            padding: 30px;
            border-radius: 10px;
            display: inline-block;
          }
          h1 { color: #38bdf8; }
          .green { color: #22c55e; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1> CI/CD Live Project</h1>
          <p><b>Version:</b> ${APP_VERSION}</p>
          <p><b>Deployed At:</b> ${deployedAt.toLocaleString()}</p>
          <p><b>Total Requests:</b> ${requestCount}</p>
          <p class="green"><b>Status:</b> Running ✅</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
