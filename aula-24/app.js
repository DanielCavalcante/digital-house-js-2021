const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "xuxinha_secret" }));

app.get('/', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(
      `Você visitou essa página 
        ${req.session.page_views} vezes`
    )
  } else {
    req.session.page_views = 1;
    res.send(
      "Olá, é sua primeira por aqui. Volte novamente!"
    )
  }
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  req.session.user = { email, password }; 
  res.send(req.session.user)
})

app.get('/products', (req, res) => {
  res.send(`Olá, ${req.session.user}!`)
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})