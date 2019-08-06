const express = require('express');
const mongoose = require('mongoose');
const routes = require('cors');
const routes = require('./routes');


// criar depois conta no mongo dp

const server = express();

// GET, POST, PUT, DELETE
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);