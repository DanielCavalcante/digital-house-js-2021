const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes')

const models = require('./database/models')
models.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Digital House')
})

app.use(routes)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})