// função do throw
function tratarErro(){
    throw('deu merda aqui rafael não vai da o pc pra mim de graça ')
}
function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase());
    }catch(erro){
           tratarErro(erro) 
    }  
}
const obj = {nome:'mario '}
imprimirNomeGritando(obj)
