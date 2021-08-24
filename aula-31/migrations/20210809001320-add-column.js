'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Categoria',
      'descricao',
     Sequelize.STRING
    );  
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'Categoria',
      'descricao'
    );
  }
};