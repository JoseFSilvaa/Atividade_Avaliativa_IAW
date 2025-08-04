function maiorPalavra(frase) {
    let palavras = frase.split(" ");
    let maior = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length > maior.length) {
            maior = palavras[i];
        }
    }
    return maior;
}
let f = maiorPalavra("A vida é bela e cheia de surpresas");
console.log(maiorPalavra(f));