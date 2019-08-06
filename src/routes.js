const express = require('express');
const routes = express.Router();
const DevController = require('./controllers/DevController')

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;