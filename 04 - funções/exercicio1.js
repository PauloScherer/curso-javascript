/* escrever meu nome */

function escreverNome(nome) {
    console.log('Meu nome é ' + nome); /* para executar o 1exemplo temos que retornar o valor ficando assim: return 'meu nome é: '
+ nome; */
}

escreverNome('Paulo');
escreverNome('Alex');
escreverNome('Ane');

/* função para saber se é maior de idade 
"1exemplo para interligar duas funções"*/


function verificarIdade(idade) {
    if (idade >= 18) {
        console.log ('Maior de Idade'); /* 1exemplo ficaria assim: console.log(escreverNome('PAulo") + 'Maior de Idade)*/
    } else{
        console.log('Menor de idade');
    }
}

verificarIdade(19);
verificarIdade(15);

