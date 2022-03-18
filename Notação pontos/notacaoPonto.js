// notação ponto em js
console.log(Math.ceil(7.3)) //arredonda pra cima 
console.log(Math.floor(7.3))//arredonda pra baixo

const objeto = [] // criei um objeto vazio
objeto.nome='mariana'
console.log(objeto)

// criando uma funçao
function obg (nome){
    this.nome = nome;
}

const obj1 = new obg('caldeirão do huck') //instaniando um objeto apartir da função obg
const obj2 = new obg('domingão do faustão')
console.log(obj1.nome)
console.log(obj2.nome)
console.log(obg.nome)
