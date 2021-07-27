const ul = document.getElementById('pokes');
const url = 'https://pokeapi.co/api/v2/pokemon';

fetch(url)
.then((res) => res.json())
.then((data) => {
  return data.results.map((poke) => {
    let li = document.createElement('li');
    li.innerHTML = `${poke.name}`;
    ul.appendChild(li)
  })
})
.catch((error) => {
  console.log(`Ops! => ${error}`)
})