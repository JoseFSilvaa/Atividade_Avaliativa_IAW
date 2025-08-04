let frase = "Vinde a mim todos os que estais cansados e eu vos aliviarei";
let soma = frase.split(" ").reduce((acc, palavra) => acc + palavra.length, 0);
console.log(soma);
