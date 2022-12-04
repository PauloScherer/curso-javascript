
function teste() {
    console.log('teste');
}
teste();
teste();


function sayMyName(name) {
    console.log('Your name is' + name);
}
sayMyName('Renan');
sayMyName('Vitor');


function quadrado(valor) {
   return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


function quadrado(valor) {
    return valor * valor;
 }
 console.log(quadrado(10) + quadrado(10));


/*incrementando juros*/
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
 }
 console.log(incrementarJuros(100, 10));
 console.log(incrementarJuros(100, 15));
 console.log(incrementarJuros(100, 20));


/* organizando os códigos usando main */
function calcularJuros() {
}

function main() {
    console.log('Programa Prinicpal');
    calcularJuros();
}
main();




