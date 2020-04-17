const { Model, DataTypes } = require('sequelize');

class Guitar extends Model{
  static init(sequelize){
    super.init({
      guitar_type: DataTypes.STRING,
      guitar_name: DataTypes.STRING,
      guitar_owner: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;