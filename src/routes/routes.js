const express = require('express');
const UserController = require('../app/controllers/UserControllers');
const GuitarController = require('../app/controllers/GuitarController');
const AddressController = require('../app/controllers/AddressController');
const ReportController = require('../app/controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/guitars', GuitarController.index);
routes.post('/users/:user_id/guitars', GuitarController.store);
routes.delete('/users/:user_id/guitars', GuitarController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;