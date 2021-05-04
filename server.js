const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('position', (msg) => {
    console.log('position', msg);
    io.emit('position', msg);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});


http.listen(3030, () => {
  console.log('Connected at 3030');
});