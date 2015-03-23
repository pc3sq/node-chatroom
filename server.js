var io = require("socket.io");
var connect = require("connect");

//Create an app w/ Connect; Include the public folder.
var app = connect().use(connect.static("public")).listen(3000);

//Tell Socket.io to listen to app we created with Connect.
var socket = io.listen(app);
