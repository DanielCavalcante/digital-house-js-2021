'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  Preco.init({
    nome: DataTypes.STRING,
    nomeCompleto: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    produtoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Preco',
  });
  return Preco;
};