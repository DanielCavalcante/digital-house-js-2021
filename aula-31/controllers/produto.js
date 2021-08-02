const models = require('../models');

const findAll = async (req, res) => {
  try {
    let produtos = await models.Produto.findAll({
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

module.exports = {
    findAll
}