/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade 
    calcule e imprima a sua média e a sua classificação conforme tabela abaixo.

    Media = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
     - Média menor que 5, Reprovação;
     - média entre 5 e 7, Recuperação;
     - média acima de 7, Passou de semestre;

*/


const nota1 = 10;
const nota2 = 7;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

console.log (media);

if (media < 5) {
    console.log ('REPROVAÇÃO');

} else if (media >= 5 && media <= 7 ) {
    console.log ('RECUPERAÇÃO');

} else {
    console.log ('APROVADO PASSOU DE SEMESTRE');
}