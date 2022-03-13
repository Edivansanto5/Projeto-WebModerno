const peso01 = 1.5;
const peso02 = 1.7;
const peso03 = Number(5.5)

let nota01 = 7;
let nota02 = 8.8;
let notaTotal = nota01 * peso01 + nota02 * peso02
let media = notaTotal/(peso01+peso02);

console.log(media)
console.log(Number.isInteger(nota01))//isInteger significa se um numero e um inteiro 
console.log(media.toFixed(3)) //formata os numeros com as casas decimais
console.log(media.toString(2))//formata os numeros em binarios