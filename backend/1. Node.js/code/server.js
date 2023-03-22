const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      res.write("Home Route");
      res.statusCode = 200;
      break;
    case "/about":
      res.write("About Route");
      res.statusCode = 200;
      break;
    default:
      res.write("Not Found");
      res.statusCode = 404;
  }
});

server.listen(3000, "localhost", () => {
  console.log("server is listening for requests on port 3000");
});
