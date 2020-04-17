const { Model, DataTypes } = require('sequelize');

class Address extends Model{
  static init(sequelize){
    super.init({
      zipcode: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;