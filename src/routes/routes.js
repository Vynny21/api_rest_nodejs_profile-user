const express = require('express');
const UserController = require('../controllers/UserControllers');
const GuitarController = require('../controllers/GuitarController');
const AddressController = require('../controllers/AddressController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/guitars', GuitarController.store);

module.exports = routes;