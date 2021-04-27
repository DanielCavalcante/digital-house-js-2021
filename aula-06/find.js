const frutas = ["Uva", "Maçã", "Morango", "Laranja"]; //Array com 4 elementos

let fruta = frutas.find(function(fruta) { //Retorna o elemento do Array
    return fruta == "Laranja";
})

console.log(fruta);