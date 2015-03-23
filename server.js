var io = require("socket.io");
var connect = require("connect");

//Create an app w/ Connect; Include the public folder.
var app = connect().use(connect.static("public")).listen(3000);

//Tell Socket.io to listen to app we created with Connect.
var chatRoom = io.listen(app);

//"socket", comes from the front-end
chatRoom.sockets.on("connection", function(socket) {
	chatRoom.sockets.emit("entrance", {message: "C'mon everybody, everybody clap your hands ... for a new CHATTER has enterred the room."});
});
