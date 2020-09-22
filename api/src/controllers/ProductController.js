
const connection = require('../database/connection');

module.exports = {
  async create(req,res) {
    const product = {
      user_id,
      title,
      price
    } = req.body;

    await connection('products')
      .insert(product);

    return res.status(201).json({message: `Created ${product.title}`});
  },

  async index(req,res) {
    const { id } = req.params; 
    const product = await connection('products')
      .where('user_id',id)
      .select('*');
      
    return res.json(product);
  },

  async delete(req,res) {
    const { user_id ,id } = req.params;

    const deleteProduct = await connection('products')
      .where({user_id, id})
      .delete()
    
    if (!deleteProduct) {
      return res.json({message: 'Cannot delete, not found'});
    }

    return res.status(204).send();
  },
}