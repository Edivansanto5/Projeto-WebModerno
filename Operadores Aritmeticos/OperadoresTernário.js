const resultado = nota => nota >= 7 ? 'Aprovado':'Reprovado'
console.log(resultado(6.9))

const nota = function(nota){
   const resultado = nota>=7?'Aprovado':'reprovado'
   console.log(resultado);
}
nota(9.9)

function nota2 (nota){
    const resultado = nota >=7 ? 'Aprovado':'Reprovado'
    return resultado
}
console.log(nota2(7));

const resultado2 = nota3 => nota3 >= 7 ? 'Aprovado':'Reprovado'
console.log(resultado(5.9));