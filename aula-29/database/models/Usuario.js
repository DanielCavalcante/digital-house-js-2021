module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: { 
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        senha: DataType.STRING
    }, {
        tableName: 'usuarios',
        timestamps: false
    })
}