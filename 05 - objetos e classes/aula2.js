/* comparando pessoas e quem e mais velho*/


class Pessoa {

}

function compararPessoas(p1, p2) {

    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);

    } else if (p2.nome > p1.nome) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);

    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }

}

const paulo = new Pessoa('paulo', 49);
const ane = new Pessoa ('ane', 51);

compararPessoas(paulo, ane);