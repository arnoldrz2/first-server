// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTA = 7000;
var PORTB = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);


server.listen(PORTA, function() {
  console.log("Server listening on: http://localhost:" + PORTA);
});

server.listen(PORTB, function() {
  console.log("Server listening on: http://localhost:" + PORTB);
});
