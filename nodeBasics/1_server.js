// node core modules
/**
 * http - launch a server, send requests
 * https - launch a ssl server
 * fs - file system
 * path - constructing paths to files or any operting system
 * os -operating system relevant info
 *  */

 const http = require("http");
 const port = 4000;

 const server = http.createServer(function(req,res) {
    console.log("hi");
   //  process.exit();
 });


 server.listen(port,function() {
    console.log("listening on port " + port);
 });
 
    
 

