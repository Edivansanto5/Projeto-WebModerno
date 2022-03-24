function tratarErro(erro){
    throw new Error('Se lascou')
}

function imprimirNomeGriando (obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!!')
    }catch(erro){
        tratarErro(erro)
    }

}
const obj = {nome:'raimundo'}
imprimirNomeGriando(obj)