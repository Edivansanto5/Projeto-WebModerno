const pessoa = {
    nome:'Marinalva',
    nome1:'Edivan sanos oliveira',
    idade:34,
    endereco:{
        logradouro:'Rua Francisco melo -centro',
        numero:324,
        casaAmigos:{
            casa1:'casa do didi',
            casa2:'casa da paula',
            casa3:'casa do marcos',
        }
    },
    cidade:{
        nomeCidade:'Passagem franca do piaui',
    }
}
// para acesar os atributo normalmente vc usaria o . para acessar
//console.log(pessoa.nome)
const{nome,idade} = pessoa
console.log(nome,idade)

const {nome1,endereco:{logradouro,numero}} = pessoa
console.log(nome,logradouro,numero)

const {nomeCidade} = pessoa
console.log(nomeCidade)
