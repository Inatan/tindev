const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


// criar depois conta no mongo dp
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gw2tc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const server = express();

// GET, POST, PUT, DELETE
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);