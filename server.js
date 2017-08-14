const http = require('http');
const express = require('express');

const app = express();
const server = http.Server(app);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ a: 3 });
});

server.listen(port, () => {
  console.log(`[INFO] Listening on *:${port}`);
})
