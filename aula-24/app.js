const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
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
  res.send(`Olá, ${req.session.user.email}!`)
})

app.get('/settings', (req, res) => {

  //Primeiro verificar se existe usuário na session
  //Verificar se o usuário está no cookie
  //Se não estiver em nenhum dos dois redirecionar para o /login
  //Se conseguiu recuperar usuário, exibe as informações
  res.render('settings', { theme: req.cookies.theme })
})

app.post('/settings', (req, res) => {
  const { theme } = req.body;
  res.cookie('theme', theme).send({ theme });
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})