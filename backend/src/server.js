const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const httpServer = express();
const server = require('http').Server(httpServer);

const io = require('socket.io')(server);

const connectedUsers = {
    
};

io.on('connection', socket => {
    const {user} = socket.handshake.query; 
    
    connectedUsers[user]=socket.id;
    console.log('nova conexão ' + socket.id);

});

// criar depois conta no mongo dp
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gw2tc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

httpServer.use((req,res,next) => {
    req.io = io;
    req.connectedUsers =connectedUsers;
    return next();
})
// GET, POST, PUT, DELETE
httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

server.listen(3333);