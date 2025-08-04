let numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let contagem = {};

for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    contagem[n] = (contagem[n] || 0) + 1;
}

let maxNumero = null;
let maxContagem = 0;

for (let n in contagem) {
    if (contagem[n] > maxContagem) {
        maxContagem = contagem[n];
        maxNumero = n;
    }
}

console.log(`O número com maior ocorrência é ${maxNumero} e aparece ${maxContagem} vezes.`);