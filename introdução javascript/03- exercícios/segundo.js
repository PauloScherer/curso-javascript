/*

        2) O IMC - Indice de Massa Corporal é um critério de organização mundial de saúde para dar uma indicação
         sobre a condição de peso de uma pessoa adulta.

         Formula do IMC:
         Imc = peso /(altura * altura)

         Elabore um alagoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

         IMC em adultos condição:
          - Abaixo de 18.5 Abaixo do peso;
          - Entre 18.5 e 25 Peso Normal;
          - Entre 25 e 40 Obeso;
          - Acima de 40 Obesidade Grave;
*/


const peso = 70;
const altura = 1.70;

const imc = peso / (altura * altura); /* altura*altura pode ser substituida por Math.pow(altura,2)*/

if (imc < 18.5) {
    console.log ('Abaixo do Peso');

} else if (imc >= 18.5 && imc <= 25) {
    console.log ('Peso Normal');

} else if (imc >= 24 && imc <= 40) {
    console.log ('Obeso');

} else {
    console.log ('Obesidade Grave');
}
