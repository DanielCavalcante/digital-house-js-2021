const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const books = [ 
  {author: 'Xuxinha', title: 'Contos de Xuxinha'}, 
  {author: 'Nena', title: 'Contos de Nena'}
]

app.use(express.json())

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

app.listen(port, () => {
  console.log(`Server is running on port => ${port}`)
})