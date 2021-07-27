const models = require('../database/models');

const findAll = async (req, res) => {
  try {
    let users = await models.User.findAll();
    res.send(users);
  } catch(error) {
    console.log(`Error: ${error}`)
  }
}

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await models.User.findOne({ where: { id } });
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      res.json('Usuário não encontrado');
    }
  } catch(error) {
    console.log(`Error: ${error}`)
  }
}

const create = async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    res.status(201);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.json('Não foi possível criar o usuário');
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await models.User.findOne({ where: { id } });
    if (user) {
      let { firstName, lastName, email } = req.body;
      await models.User.update(
        { firstName, lastName, email }, 
        { where: { id } } 
      );
      res.json({ status: '200', message: 'Usuário atualizado com sucesso' });
    } else {
      res.json({ status: '404', message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500);
    res.json('Não foi possível atualizar o usuário');
  }
}

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await models.User.findOne({ where: { id } });
    if (user) {
      await models.User.destroy({ where: { id } });
      res.json({ status: '200', message: 'Usuário deletado com sucesso' });
    } else {
      res.status(404);
      res.json('Usuário não encontrado');
    }
  } catch (error) {
    res.status(500);
    res.json('Não foi possível deletar o usupario');
  }
}



module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove
}