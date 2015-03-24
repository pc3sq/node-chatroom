var io = require("socket.io");
var connect = require("connect");

//Create an app w/ Connect; Include the public folder.
var app = connect().use(connect.static("public")).listen(3000);

//Tell Socket.io to listen to app we created with Connect.
var chatRoom = io.listen(app);

//"socket", comes from the front-end
chatRoom.sockets.on("connection", function(socket) {
	//For the connecting chatter (socket), display a message welcoming message.
	socket.emit("entrance", {message: 'Welcome to the chat room!'});

	//Upon custom event "disconnect", alert all chatters (sockets) that a chatter has left.
	socket.on("disconnect", function() {
	  chatRoom.sockets.emit("exit", {message: 'A chatter has disconnected.'});
	});

	//"chitchat" is the message object being sent from the client.
	socket.on("chat", function(chitchat) {
	  chatRoom.sockets.emit("chat", {message: "(ಠ_ಠ)  " + chitchat.message});
	});


	//Alert all chatters (sockets) wen a new chatter enters.
	chatRoom.sockets.emit("entrance", {message: "==NEW CHATTER HERE=="});
});
