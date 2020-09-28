
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
    //  user_id => 100

    const userCheck = await connection('products')
      .where('user_id', id)

    if (!userCheck) {
      return res.status(401).json({ error: 'No user with this ID'});
    }

    const product = await connection('products')
      .where('user_id',id)
      .select( 'id', 'title', 'price' );
    
    return res.json(product);
  },

  async delete(req,res) {
    const { id } = req.params;

    const deleteProduct = await connection('products')
      .where({id})
      .delete()
    
    if (!deleteProduct) {
      return res.status(404).json({message: 'Cannot delete, not found'});
    }

    return res.status(200).send();
  },
} 