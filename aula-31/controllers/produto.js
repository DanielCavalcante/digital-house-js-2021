const models = require('../models');

const findAll = async (req, res) => {
  try {

    let produtos = models.Produto.findAll({
        include: {
            model: models.Categoria,
            as: 'Categoria',
            required: true
        }
    });
    res.send(produtos);
  } catch(error) {
    console.log(`Error: ${error}`)
  }
}

const findAllByQuery = async (req, res) => {
  try {
    const produtos = await models.sequelize.query("select * from Produtos",
    {
      type: QueryTypes.SELECT
    });
    res.send(produtos);
  } catch(error) {
    console.log(`Error: ${error}`)
  }
}

const create = async (req, res) => {
  try {
    const produtos = await models.sequelize.query("select * from Produtos",
    {
      type: QueryTypes.SELECT
    });
    res.status(201).send(produtos);
  } catch(error) {
    console.log(`Error: ${error}`)
  }
}

module.exports = {
    findAll,
    findAllByQuery
}