const Guitar = require('../models/Guitar');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { 
        association: 'guitars', 
        attributes: [ guitar_type, guitar_name, guitar_owner ],
        through: {
          attributes: []
        }  
      }
    });
    
    return res.json(user.guitars);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { guitar_type, guitar_name, guitar_owner } = req.body;

    const user = User.findByPk(user_id);

    if(!user){
      return res.status(400).json({error: 'User not found.'})
    }

    const [ guitar ] = await Guitar.findOrCreate({ 
      where: { guitar_type, guitar_name, guitar_owner }
    });

    await user.addGuitar(guitar)
    
    return res.json(guitar);
    
  },

  async delete(req, res){
    const { user_id } = req.params;
    const { guitar_name } = req.body;

    const user = await User.findByPk(user_id);

    if(!user){
      return res.status(400).json({ error: 'User not found.' });
    }

    const guitar = await Guitar.findOne({
      where: { guitar_name }
    });

    await user.removeGuitar(guitar);

    return res.json();
  }
}