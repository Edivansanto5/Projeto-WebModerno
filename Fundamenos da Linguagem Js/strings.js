let nome = 'Mariana23';
console.log(nome.charAt(4)) // vai pegar um nome referente na pocisão 4
console.log(nome.charCodeAt(5)) // vai pegar um valor da posiçao 5 e mostrar na forma da tabela  UNICOD
console.log(nome.indexOf('4')) // vai procurar se tem um numero na posiçao 4 palavra da variavel
console.log(nome.indexOf('1')) // vai procurar se tem um numero na posição do 1 na palavra da variavel
console.log(nome.substring(2,6)) // vai pegar as letras apartir do indice 2 ate 6
console.log(nome.substring(4,6)) // vai pegar as letras apartir do indice 4 ate 6
console.log('Prazer '.concat(nome).concat(' !')) // vai concatenar as palavras 
console.log('Prazer '+ nome +' !')// mesma coisa acima 
console.log('Prazer',nome,'!')// mesma coisa acima
console.log(nome.replace('M','z'))// vai trocar de de letras entre-se
console.log(nome.replace(2,'s'))// mesma coisa acima
console.log(nome.codePointAt(5))// vai procurar na tabela unicod a letra na 5 posição
console.log(nome.lastIndexOf())
