const produtos = ['Sabão', 'Techpix', 'Tênis', 'Celular']

const getProdutos = (req, res) => {
  res.send(produtos)
}

const getProduto = (req, res) => {
  let { nome } = req.params 
  const produto = produtos.filter(produto => {
    return produto == nome;
  })
  res.send(produto)
}

module.exports = {
  getProdutos,
  getProduto
}