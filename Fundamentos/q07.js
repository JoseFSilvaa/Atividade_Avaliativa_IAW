let frase = "Jesus é o caminho, a verdade e a vida";

let novaFrase = frase.split(" ").map(palavra => {
    if (palavra.length < 5) {
        return palavra.toUpperCase();
    } else if (palavra.length > 5) {
        return palavra.toLowerCase();
    }
}).join(" ");

console.log(novaFrase);

