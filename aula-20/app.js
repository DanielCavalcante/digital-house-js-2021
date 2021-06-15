const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const books = [
  {isbn: 1, author: 'Xuxinha', title: 'Contos de Xuxinha'},
  {isbn: 2, author: 'Nena', title: 'Contos de Nena'}
];

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Digital House');
})

app.get('/books', (req, res) => {
  let { author } = req.query
  let filteredBooks = books.filter(book => {
    return book.author === author;
  })
  res.send(filteredBooks);
})

app.post('/books', (req, res) => {
  let { title, author } = req.body
  res.send({ title, author, publisher: 'Digital House' });
})

app.put('/books/:isbn', (req, res) => {
  let { isbn } = req.params
  let { publisher } = req.body
  let book = books[isbn-1];
  book.publisher = publisher;
  res.send(book);
})

app.delete('/books/:isbn', (req, res) => {
  let { isbn } = req.params;
  res.send(`Livro removido com sucesso para o isbn: ${isbn}`)
})

app.use((req, res) => {
  res.status(404).render('not-found');
})

app.listen(port, () => {
  console.log(`Server is running on port => ${port}`)
})