const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
  async index(req, res){
    const addresses = await Address.findAll();
    
    return res.json(addresses);
  },
  async store(req, res){
    const { user_id } = req.params;
    const { zipcode, city, state, street, number, complement } = req.body;

    const user = await User.findByPk(user_id)

    if(!user){
      return res.status(400).json({ error: 'User not found.'})
    }

    const address = await User.create({ 
      zipcode, 
      city, 
      state, 
      street, 
      number, 
      complement,
      user_id, 
    });
    
    return res.json(address);
  }
}