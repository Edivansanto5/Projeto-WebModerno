function compras  (trabalho1,trabalho2){
    const comprarSorvet = trabalho1 || trabalho2
    const comprartv50 = trabalho1 && trabalho2
    const comprartv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvet
    return {comprarSorvet,comprartv50, comprartv32,manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))