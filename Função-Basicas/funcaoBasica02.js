//criando uma função dentro de uma variavel
const somarNmero = function(n1,n2,n3,n4){
    console.log (n1 + n2 + n3 + n4)
}
somarNmero(3,5,8,9)

//função arrow function em uma variavel com retorno
const multiplicaNumero = (n1 , n2 ) =>{
    return n1 * n2
}
console.log(multiplicaNumero(5,9))

// funçao com retorno implicito
const subtrairNumero = (n1 , n2) => n1 - n2
console.log(subtrairNumero(5,3))
