## Comandos para gerar nossos modelos

1. npx sequelize-cli model:generate --name Produto --attributes nome:string,descricao:string,categoriaId:integer
2. npx sequelize-cli model:generate --name Categoria --attributes nome:string,descricao:string
3. npx sequelize-cli model:generate --name Preco --attributes nome:string,valor:float