const { Model, DataTypes } = require('sequelize');

class Guitar extends Model{
  static init(sequelize){
    super.init({
      guitar_type: DataTypes.STRING,
      guitar_name: DataTypes.STRING,
      guitar_owner: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'Guitars'
    })
  }

  static associate(models){
    this.belongsToMany(models.User, { foreignKey: 'guitar_id', through: 'user_guitars', as: 'users'})
  }
}

module.exports = Guitar;