const frutas = ["Uva", "Maçã", "Morango", "Laranja"];

let minhaFruta = frutas.find(function(fruta) {
    return fruta == "Laranja";
})

console.log(minhaFruta);