function mediaNota(nota1,nota2){
    let media = (nota1 + nota2)/2
    if(media>=7){
        console.log('Aprovado com a média ' + media);
    }
    if(media < 4){
        console.log(' está de prova final ' + media);
    }
    else{
        console.log(' está reprovado ' + media );
    }
    

}
mediaNota(3,2)