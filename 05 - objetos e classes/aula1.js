class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {  /*é o que acontece quando uma pessoa e isntanciada*/
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log (`Meu nome é ${this.nome} e minha idade é: ${this.idade}`);
    }

}

const paulo = new Pessoa('Paulo', 25);

console.log(paulo);