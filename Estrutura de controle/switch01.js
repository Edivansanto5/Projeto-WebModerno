mostraNota = 1;
naoMostrar = 2

imprimirResultado = function(valor){
    switch (Math.floor(valor)) {
        case 9,10:
            console.log('Aprovado com sucesso Filho');
            console.log('Deseja ver sua nota ? [1] para sim [2] para não')
            break;
        case 8:
            console.log('Aprovado um ponto acima da media ');
            break;
        case 7:
            console.log('Aprovado na média ');
            console.log('Essa foi por pouco ');
            break;
        case 4,5,6:
            console.log('Voce se encontra de prova final ')
            break;
        case 0,1,2,3:
            console.log('Você está Reprovado direto');
            break;
        default:
            console.log('Comando invalido');
            
    }
}
imprimirResultado(10)

