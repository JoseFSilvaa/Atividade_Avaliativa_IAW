function contVC(frase) {
    let vogais = "aeiouAEIOU";
    let contadorVogais = 0;
    let contadorConsoantes = 0;
    let fraseSemAcentos = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos da frase

    for (let i = 0; i < fraseSemAcentos.length; i++) {
        if (vogais.includes(fraseSemAcentos[i])) {
            contadorVogais++;
        } else if (fraseSemAcentos[i].match(/[a-zA-Z]/)) {
            contadorConsoantes++;
        }
    }
    return {
        vogais: contadorVogais,
        consoantes: contadorConsoantes
    };
}

let resultado = contVC("Olá Mundo");
console.log(resultado);
