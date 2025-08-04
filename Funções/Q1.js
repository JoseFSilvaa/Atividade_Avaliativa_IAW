function numInvertido(numero) {
    return numero.toString().split("").reverse().join("");
}

let resultado = numInvertido(12356);
console.log(resultado);