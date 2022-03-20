function rand({min = 0,max = 100}) {
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}
console.log(rand({min:6, max:1}))// com destructuring

const obj = {max:100, min:50}
console.log(rand(obj))// como uma funçao

console.log(rand({min:96}))