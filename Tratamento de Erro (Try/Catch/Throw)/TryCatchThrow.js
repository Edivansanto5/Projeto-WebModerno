function tratarErro(erro){
    throw new Error('Se lascou')
}

function imprimirNomeGriando (obj){
    try{
        console.log(obj.nome.toUpperCase()+'!!!!')
    }catch(erro){
      
    }
}
const obj = {nome:'raimundo'}
imprimirNomeGriando(obj)