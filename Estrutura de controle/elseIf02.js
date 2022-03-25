Number.prototype.entre = function(inicio,fim){
    return this >= inicio &&  this <= fim
}

imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Aprovado em muleque ');
        console.log('Sua nota foi uma das mais alta !!!!!!!');
        console.log('Sua nota foi de ' + nota);
    }
    else if(nota.entre(7, 8.9)){
        console.log('Aprovado ')
        console.log('Sua nota foi de ' +nota);
    }
    else if(nota.entre(4 , 6.9)){
        console.log('Você está em Recuperação ');
        console.log('Sua nota foi de ' + nota);
        console.log('Estude um pouco mais que vai da certo');
        console.log('Não desista');
    }
    else if(nota.entre(0 , 5.9)){
        log('Reprovado Direto  com a nota = '+ nota)
    }
    else{
        console.log('NOTA INVALIDA !!!!!! ');
        console.log('Digite apenas numeros entre 0 á 10');
        console.log('seu burro da porra ');
    }
}
imprimirResultado(79)