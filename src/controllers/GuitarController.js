const Guitar = require('../models/Guitar');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const guitars = await Guitar.findAll();
    
    return res.json(guitars);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { guitar_type, guitar_name, guitar_owner } = req.body;

    const user = User.findByPk(user_id);

    if(!user){
      return res.status(400).json({error: 'User not found.'})
    }

    const guitar = await Guitar.create({ 
      guitar_type, 
      guitar_name, 
      guitar_owner,
      user_id, 
    });
    
    return res.json(guitar);
    
  }
}