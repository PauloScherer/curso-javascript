/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. SEndo elas:
 1 - Preço etanol;
 2 - preço da Gasolina;
 3 - Tipo de combustivel que está no seu carro;
 4 - Gasto médio de combustível por KM;
 5 - Distãncia em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/


const preçoEtanol = 5.10;
const preçoGasolina = 4.75;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 10;
const distanicaKm = 100;

const litrosConsumidos = distanciaKm / KmPorLitros;

if (tipoCombustivel === 'gasolina'){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log ('Gasolina');
    console.log (valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log ('Álcool');
    console.log (valorGasto.toFixed(2));
}    



