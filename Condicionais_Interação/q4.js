let alunos = [
    ["José", [10, 50, 100]],
    ["Erick", [55, 78, 90]],
    ["Vitória", [80, 85, 90]],
    ["Eduardo", [60, 70, 65]],
    ["Matheus", [95, 100, 90]]
];

for (let i = 0; i < alunos.length; i++) {
    let nome = alunos[i][0];
    let notas = alunos[i][1];
    let media = (notas[0] + notas[1] + notas[2]) / 3;

    if (media < 70) {
        console.log(`${nome}, média ${media}, Reprovado.`);
    } else {
        console.log(`${nome}, média ${media}, Aprovado.`);
    }
}