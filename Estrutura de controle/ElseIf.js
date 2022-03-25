Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}
// atribuindo uma funçao em uma variavel!
const imprimirResultado = function(nota){
    if(nota.entre(9 , 10)){
        console.log('Aprovado com sucesso');
    }else if(nota.entre( 7 , 8.99 )){
        console.log('Aprovado');
    }else if(nota.entre(4 , 6.99)){
        console.log('Você está de recuperação');
    }else if(nota.entre(0 && 3.99)){
        console.log('Reprovado direto');
    }else{
        console.log('Comando invalido');
    }
}

imprimirResultado(89)
