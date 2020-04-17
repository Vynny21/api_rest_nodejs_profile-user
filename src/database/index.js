const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//Models
const User = require('../models/User');
const Guitar = require('../models/Guitar');
const Address = require('../models/Address');

User.init(connection);
Guitar.init(connection);
Address.init(connection);

module.exports = connection;