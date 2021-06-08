const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  const user = { name: 'Xuxinha', email: 'xuxinha@gmail.com' }
  res.render('index', { user })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
})

