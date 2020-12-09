// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var http =require("http");
var fs = require("fs");
const routes = require('./routes');

// turn on routes
app.use(routes);


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }
  
  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  var server = http.createServer(handleRequest);
  
  // Start our server so that it can begin listening to client requests.
  server.listen(PORT, function() {
  
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    app.end()


    app.post("/api/notes", function(req, res) {
        res.send("");
      });
      
      app.get("/api/notes", function(req, res) {
        // 
        res.sendFile(path.join(__dirname, "notes.html"));
      });
      
      app.get("*", function(req, res) {
        // 
        res.sendFile(path.join(__dirname, "notes.html"));
      });

    return fs.readFile(__dirname + "/index.html", function(err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
    //   res.end(data);
    });
  })

  
  