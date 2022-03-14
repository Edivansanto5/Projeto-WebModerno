let isAtivo = false;
console.log(isAtivo); // false

isAtivo = 1;
console.log(!!isAtivo); // true

console.log('Abaixo todos os dados que são possiveis de serem verdadeiros em js');
console.log(! 0)
console.log(!! 3)
console.log(!! -99)
console.log(!! ' ')
console.log(! false)
console.log(!! true)
console.log(!! 'qualquer texo')
console.log(!! {})
console.log(!! [])
console.log(!! Infinity)
console.log(! (isAtivo = true))
console.log(! null)

console.log('Abaixo todos os dados que são possiveis de serem falsos em js')
console.log(isAtivo = false)
console.log(!! 0)
console.log(! 1)
console.log(!! '')
console.log(! null)
console.log(!! NaN)
console.log(!! undefined)



