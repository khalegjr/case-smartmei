/*
2 - Sabendo que 100C (100 Graus Celsius) é igual a 212F (Fahrenheit). Escreva um
algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
    C           F - 32
---------- = -----------
    5             9
    
*/
var fahrenheit = parseFloat(process.argv[2]);

var celsius = ((5 * fahrenheit - 160) / 9).toFixed(2);

console.log(fahrenheit + '°F correspondem a ' + celsius + '°C');
