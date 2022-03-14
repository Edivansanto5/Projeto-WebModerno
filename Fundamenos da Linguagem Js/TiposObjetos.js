// vamos criar um objetos em java script
const produtos = {}
produtos.nome = 'Cadernos';
produtos.preco = 33.45
produtos.Desconto = 0.50

console.log(produtos)

// outra forma de fazer objetos e assim
const produto2 = {
    nome: 'lapis de cor',
    preco: 12.30,
    Desconto: 0.50
}
console.log(produto2)

// podemos também adicionar objetos dentro de objetos veja
const dadosPessoais = { // aqui e um objeto
    nome: 'Mariana',
    idade: 33,
    documentos: {
        cpf: '06712333290',
        rg: 2345688,

        cidade: { //aqui e outro objeto
            nome:'passagem franca do piaui',

            nacionalidade:{ //aqui e outro objeto
                pais:'Brasil',
                estado:'Piauí',
                habitantesCidade:'4996',
            }
        }
    }
}
console.log(dadosPessoais)
console.log(dadosPessoais.documentos)
console.log(dadosPessoais.nacionalidade)