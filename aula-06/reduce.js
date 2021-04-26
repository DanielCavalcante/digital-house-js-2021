let numeros = [5, 7, 16];

let resultado = numeros.reduce(function(acumulador, umNumero) {
    return acumulador + umNumero;
})

console.log(resultado);