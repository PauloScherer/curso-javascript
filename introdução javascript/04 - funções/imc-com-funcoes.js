
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

    Obs: este exercicio esta na pasta de exercícios nno segundo.js 
    agora vamos fazer este mesmo exercicio usando funções.
*/


function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do Peso');
    
    } else if (imc >= 18.5 && imc <= 25) {
        return ('Peso Normal');
    
    } else if (imc >= 24 && imc <= 40) {
        return ('Obeso');
    
    } else {
        return ('Obesidade Grave');
    }
}

function main(){
    const peso = 70;
    const altura = 1.70;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
}
main();

/* isolamando uma conta matamatica usando uma função
nome da função é função imediatamente invocada 
função main = código principal*/

(function (){
    const peso = 70;
    const altura = 1.70;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
})();

/* irá resolver primeiro o que esta
 dentro do parenteses e irá assumir este valor
 esta função so será executada somente dentro do parenteses.
 não conseguimos chamar ela novamente, isolando o código */