const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
  async show(req, res){
    
    const users = await User.findAll({
      attributes: [ 'name', 'email' ],
      where: {
        email: {
          [Op.like]: email,
        }
      },
      include: [
        { 
          association: 'addresses', 
          required: false,
          where: {
            street: {
              [Op.like]: street
            }
          }
        }, //endereços
        { 
          association: 'guitars',
          required: false, 
          where: {
            [Op.like]: name
          }
        } //guitarras
      ]
    });
    return res.json(users)
  }
}