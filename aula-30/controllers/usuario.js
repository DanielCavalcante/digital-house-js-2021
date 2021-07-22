const models = require('../database/models');

const index = async (req, res) => {
    try {
        let usuarios = await models.Usuario.find();
        res.send(usuarios)
    } catch(error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = {
    index
}