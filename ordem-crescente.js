/*
2. Ler dois valores (considere que não serão lidos valores iguais) e retornar 
em ordem crescente.
 */
/*
var vetOr = Array(
  (document.getElementById("v1").value),
  (document.getElementById("v2").value),
  (document.getElementById("v3").value)); */

var arrNum = [parseInt(process.argv[2]), parseInt(process.argv[3])];
//console.log(arrNum);

function compararNumeros(a, b) {
  return a - b;
}
var arrOrdenado = arrNum.sort(compararNumeros);
console.log(arrOrdenado);
