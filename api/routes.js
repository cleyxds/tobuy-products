const express = require('express');

const user = require('./src/controllers/UserController');
const product = require('./src/controllers/ProductController');

const routes = express.Router();

routes.post('/user', user.create);
routes.get('/user', user.index);
routes.delete('/user/:id', user.delete);
routes.get('/user/:id', user.indexSingle);

routes.post('/products', product.create);
routes.get('/products/:id', product.index);
routes.delete('/products/:user_id/:id', product.delete);

module.exports = routes;