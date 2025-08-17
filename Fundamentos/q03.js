let grauCelsius = 37;
let grauFahrenheit = 98.7;

let grauPFahrenheit = (grauCelsius * 9/5) + 32;
let grauPCelsius = (grauFahrenheit - 32) * 5/9;
console.log(`A temperatura Celsius -> ${grauCelsius} em Fahrenheit é: ${grauPFahrenheit}`);
console.log(`A temperatura Fahrenheit -> ${grauFahrenheit} em Celsius é: ${grauPCelsius}`);