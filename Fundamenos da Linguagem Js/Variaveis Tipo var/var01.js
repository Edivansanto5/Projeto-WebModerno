// aqui vamos fazer um exemplo de de como se comporta as variaveis

{
    {
        {
            {
                {
                    {
                        {
                            var teste = 'testando'
                            console.log(teste)
                        }
                    }
                }
                console.log(teste)
            }
        }
    }
}
// será se vai imprimir a variael aqui a baixo?
// sim ela vai ser mostrada em qualquer parte do programa e com let ?

console.log(teste)
{
    {
        {
            let nome = 'teste dois'
            console.log(nome)
        }
    }//console.log(nome)
}

//console.log(nome)
// diferentemente do var o let so será exibido dentro do proprio escopo de onde ela foi declarada
// a mesma coisa serve para o const

{
    {
        {
            {
                {
                    const numero = 12357558
                    console.log(numero)
                }
            }
        }
    }
}
//console.log(numero)