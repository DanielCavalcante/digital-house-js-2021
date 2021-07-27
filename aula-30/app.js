const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.json());
const models = require('./database/models');

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

app.use(routes)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})