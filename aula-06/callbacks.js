const somar = (numeroA, numeroB) => numeroA + numeroB //Arrow function

let calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(5, 5, (numeroA, numeroB) => numeroA + numeroB));
console.log(calculadora(5, 5, (numeroA, numeroB) => numeroA - numeroB));
console.log(calculadora(5, 5, (numeroA, numeroB) => numeroA * numeroB));