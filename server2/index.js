const http = require("http");

const app = http.createServer((req, res) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:4001"
  );
  res.setHeader("Access-Control-Allow-Methods", "DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  console.log(req.headers.cookie)
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.url === "/api/cookie") {
    res.setHeader('set-cookie', 'a=1; Path=/; HttpOnly; SameSite=lax');
    res.end("set cookie");
    return;
  }
  res.end("server2"+req.headers.cookie);
});

app.listen(4002);
