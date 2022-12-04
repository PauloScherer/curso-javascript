
/*
    uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    faça uma lagoritimo que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

    dados de entrada:
    5
    50
    10
    98
    23

    saida:
    98
*/

const { gets, print } = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
       
    
}

print(maiorValorEncontrado);

