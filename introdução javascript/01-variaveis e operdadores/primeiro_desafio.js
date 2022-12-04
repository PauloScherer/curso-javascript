/* faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis. Sendo elas:
1 - preço do combustivel;
2 - gasto medio de combustivel do carro por KM;
3 - distancia em KM da viagem;

*/

const precoCombustivel = 4.75;
const KmPorLitros = 15;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / KmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log (valorGasto.toFixed(2));