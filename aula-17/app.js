const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Digital House')
})

const routes = require('./routes/index')

app.use('/api', routes)

app.listen(port, () => {
  console.log(`O nosso serviço está funcionando na porta: ${port}`)
})
