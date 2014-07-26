var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Worldasdasdasad test");
  response.end();

}).listen(8888);

var five  = require("johnny-five");
var board = new five.Board({
  port: "/dev/ttyACM0"
});

board.on("ready", function() {
  new Led(8).blink();
  console.log('Board is ready');
});

