/*
2. Ler dois valores (considere que não serão lidos valores iguais) e retornar 
em ordem crescente.
 */


var arrNum = [parseInt(process.argv[2]), parseInt(process.argv[3])];
//console.log(arrNum);

//para comparar corretamente números de duas ou mais casas
function compararNumeros(a, b) {
  return a - b;
}

var arrOrdenado = arrNum.sort(compararNumeros);
console.log(arrOrdenado);
