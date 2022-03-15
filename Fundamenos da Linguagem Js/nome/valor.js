const saudacao = 'Bom dia';
function exec(){
    
    const saudacao = 'Meu bemzinho'
    return saudacao
}
console.log(saudacao)
console.log(exec())
// outro exemplo de funçao no formato de objeto

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