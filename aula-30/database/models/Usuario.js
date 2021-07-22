module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        senha: DataType.STRING
    }, {
        tableName: 'usuario',
        timestamps: false
    })
}