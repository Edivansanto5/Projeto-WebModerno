function soBoanoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com successo !!! com a nota ' + nota);
    }
    if(nota > 4 && nota < 7 ){
        console.log('vc esttá de recuperação sua nota é '+ nota);
    }
    if(nota < 4){
        console.log('Reprovado direto');
    }
}
soBoanoticia(3.9)