// exemplo um objetos são aninhada de pares e valores exemplo abaixo!
const saudacao = 'Bom dia';
function exec(){
    
    const saudacao = 'Meu bemzinho'
   return saudacao // se nao tivesse retorno dava um undefined
}
console.log(saudacao)
console.log(exec())


let dadosPessoais = {
    nome:'Edivan dos santos oliveira',
    idade:34,
    logradouro:{
        rua:'Rua francisco melo ',
        cidade:'Passagem franca do piaui',
        numercasa:45,
        declaracao:{
            sexo:'masculino',
            
        }
    }

}

console.log(dadosPessoais.logradouro) // aqui so vai mostrar a parte de lougradouro pra 
//console.log(dadosPessoais)