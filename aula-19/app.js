const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/usuarios.routes')

app.set('view engine', 'ejs');

app.use('/api', routes);

app.listen(port, () => console.log(`Server on port: ${port}`));