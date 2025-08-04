let nomeCompleto = "Alan Mathison Turing";
let partesNome = nomeCompleto.split(" ");
let sobrenome = partesNome.pop();
let iniciais = partesNome.map(nome => nome.charAt(0).toUpperCase() + ".").join(" ");
let resultado = `${iniciais} ${sobrenome}`;
console.log(resultado);