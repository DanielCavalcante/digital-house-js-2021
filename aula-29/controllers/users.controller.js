const { Usuario } = require('../database/models')

const userController = {

    index: async (req, res) => {
        const users = await Usuario.findAll();
        
        console.log(users)
    }


}

module.exports = userController