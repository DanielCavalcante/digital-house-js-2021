const fetch = require("node-fetch");
const url = 'https://pokeapi.co/api/v2/pokemon';

const getPokes = async () => {
  try {
    const res = await fetch(url);
    const pokes = await res.json();
    console.log(pokes.results);
    
  } catch (err) {
    console.error(err);
  }
}

getPokes();