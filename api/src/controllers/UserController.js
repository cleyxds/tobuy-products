
const connection = require('../database/connection');

module.exports = {

  async index(req,res) {
    const users = await connection('users')
      .select('*');
    
    return res.json(users);
  },

  async create(req,res) {
    const { email, password } = req.body;

    const [emailCheck] = await connection('users')
      .where({email})
      .select('email')

    if (!emailCheck) {
      await connection('users')
      .insert({
        email,
        password
      });
      return res.status(201).send();
    }

    return res.json({message: 'This email is already in use'});
  },

  async delete(req,res) {
    const { id } = req.params;

    const user = await connection('users')
      .where({id})
      .delete();
    
    if (!user) {
      return res.status(401).json({ error: 'No user with this ID'});
    }

    return res.status(200).send();
  },

  async indexSingle(req,res) {
    const { id } = req.params;

    const singleUser = await connection('users')
      .where({id})
      .select('email')
      .first();

    if (!singleUser) {
      return res.status(401).json({ error: 'No user with this ID' });
    }

    return res.json(singleUser);
  }
}