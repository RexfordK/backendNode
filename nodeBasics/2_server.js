// understanding and sending requests
const http = require("http");
const fs = require("fs");
const port = 4000;

const server = http.createServer(function(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write(
      "<html><head></head><body><h1>Home</h1><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Send</button></form></body></html>"
    );
    console.log(req.method === "POST");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
    })

    fs.writeFileSync("message.txt", "Dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  //responses
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head></head><body><h1>Other</h1></body></html>");
  res.end();
});

server.listen(port, function() {
  console.log("listening on port " + port);
});
