let idades = [15, 39, 18, 23, 10]; // Um array
console.log('Array Original', idades);

let maiores = idades.filter(function(idade) { // Um novo Array
    return idade >= 18;
});

console.log(maiores);