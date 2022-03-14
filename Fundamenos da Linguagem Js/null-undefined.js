let valor // não esta inicializada
console.log(valor)

valor = null // ausencia de valor 
console.log(valor)
//console.log(valor.toEstring()) isso vai ocorrer um erro

const produto = {}
console.log(produto.nome)
console.log(produto.preco)// se houver um objeto do lado esquerdo do . qualquer coisa da undefined
console.log(produto.valor)

produto.preco = 3.44
console.log(produto)

produto.preco = undefined // evitar usar essa tecnica e deixar a propria linguagem definir isso
console.log(produto)

produto.nome = null
console.log(produto)