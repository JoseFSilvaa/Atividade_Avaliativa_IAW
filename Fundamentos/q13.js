let numeros = [1, 2, 3, 4, 5];
let somaCubos = numeros.reduce((total, numero) => total + Math.pow(numero, 3), 0);
console.log(`A soma dos cubos dos números é: ${somaCubos}`);