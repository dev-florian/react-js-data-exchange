let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('connected');
    socket.on('chat message', function(msg) {
        msg.date = Date.now();
        io.emit('chat message', msg);
        console.log(msg);
    });
});

http.listen(4000, function () {
    console.log('listening on *:4000');
});