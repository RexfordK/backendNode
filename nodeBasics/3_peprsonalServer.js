const http = require("http");

const server = http.createServer(function(req, res) {
    const url = req.url;

    if(url === "/"){
        res.write("<h1>Home Page</h1>");
       res.write( "<html><head></head><body><h1>Home</h1><form action='/user' method='POST'><input name='fish' type='text'><button type='submit'>Send</button></form></body></html>");
    }

    if(url === "/user"){
        res.write("<h1>Fish Page</h1>");

    }
});

server.listen(3000,
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Server is running");
    }
});


