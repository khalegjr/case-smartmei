/*
1. Ler dois valores (considere que não serão lidos valores iguais) e retornar o 
maior deles.
*/
//console.log(process.argv);
num1 = parseInt(process.argv[2]);
num2 = parseInt(process.argv[3]);

var resultado =
  num1 > num2 ? 'O maior valor é o ' + num1 : 'O maior valor é o ' + num2;
console.log(resultado);
