let contPar = 0;
let contImpar = 0;

for (let n = 0; n <= 99; n++) {
    if (n % 2 == 0) {
        contPar += n;
    } else {
        contImpar += n;
    }
}

console.log(`A soma dos números pares é: ${contPar}`);
console.log(`A soma dos números ímpares é: ${contImpar}`);