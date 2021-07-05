const fetch = require("node-fetch");
const url = 'https://pokeapi.co/api/v2/pokemon';

fetch(url)
  .then((res) => res.json())
  .then((dados) => {
    console.log(dados)
  })
  .catch((error) => {
    console.log(`Ops! => ${error}`)
  })