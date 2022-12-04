/*

    1- crie uma classe para reprersentar carros.
        Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado
        Crie um metodo que dado a quantidade de km e o preço do combustivel nos dê o valor
        gasto em reais para realizar este percuso.

*/


class Carro {

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercuso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const cobalt = new Carro ('GM', 'Branco', 1/12);
const clio = new Carro ('Rnault', 'prata', 1/16);

console.log(cobalt.calcularGastoDePercuso(150, 4,69));
console.log(clio.calcularGastoDePercuso(150, 4.69));
