function presente (frase, palavra) {
    if (frase.includes(palavra)) {
        console.log("A palavra está presente na frase.");
    } else {
        console.log("A palavra não está presente na frase.");
    }
}

let p = presente("Jesus é o caminho, a verdade e a vida", "andar");
console.log(p);