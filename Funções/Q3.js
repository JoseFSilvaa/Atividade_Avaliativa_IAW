function MaiorMenor(array) {
    let maior = null;
    let menor = 99999999999999999999999999999999999999999999999999999999;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
        else if (array[i] < menor) {
            menor = array[i];
        }
    }
    return {
        maior: maior,
        menor: menor
    };
}

let numeros = [5, 3, 8, 1, 2];
console.log(MaiorMenor(numeros));