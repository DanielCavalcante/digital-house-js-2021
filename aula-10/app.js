const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.json())

app.get('/informacoes', (req, res) => {
  let { email, nome } = req.query
  res.send(`As informações passadas foram => Nome => ${nome} e Email => ${email}`)
})

app.post('/informacoes', (req, res) => {
  console.log(req.body)
  let { email, password } = req.body
  res.send(`As informações passadas foram 
    \nEmail => ${email} \nSenha => ${password}`)
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


