const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//Models
const User = require('../app/models/User');
const Guitar = require('../app/models/Guitar');
const Address = require('../app/models/Address');

User.init(connection);
//User.associate(connection.models);

Guitar.init(connection);
Guitar.associate(connection.models);

Address.init(connection);
Address.associate(connection.models);

module.exports = connection;