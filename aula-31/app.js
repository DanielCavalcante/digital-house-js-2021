const express = require('express');
const app = express();
const port = 3000;
const produtoRoutes = require('./routes/produto');

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


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})