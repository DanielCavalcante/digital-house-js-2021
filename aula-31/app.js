const express = require('express');
const app = express();
const produtoRoutes = require('./routes/produto');
require('dotenv').config();

app.use(express.json());
const models = require('./models');
const connect = async () => {
  try {
    await models.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect();

app.get('/', (req, res) => {
    res.send('Digital House')
})

app.use(produtoRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
})