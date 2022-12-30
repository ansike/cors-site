const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(fs.readFileSync("./index.html"));
    return;
  }
  res.end("server1");
});

app.listen(4001);
