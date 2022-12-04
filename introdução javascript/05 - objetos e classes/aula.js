

/* objeto literal. o que estiver dentro daas chaves e uma coleção de dados 
um objeto no javascript é uma coleção dinâmica de chave e valor*/

const pessoa = {  /*objeto*/
    nome: 'Paulo Alex scherer',
    idade: 49,

    descrever: function () { /*Método (dentro do metodo posso usar os objetos*/
        console.log (`Meu nome é${this.nome} e minha idade é:${this.idade}`);
    }
};

console.log(paulo.nome);
console.log(paulo.idade);
console.log(paulo);

paulo.altura = 1.72; /* forma de incrementar dinamicamente (de uma certa forma editar)*/
delete paulo.nome; /*forma de remover um dado dinamicamente*/
console.log(paulo);

pessoa.descrever();


/* classes é como os objetos devem ser*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {  /*é o que acontece quando uma pessoa e isntanciada*/
        this.nome = nome;
        this.idade = 20;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log (`Meu nome é${this.nome} e minha idade é:${this.idade}`);
    }

}
const paulo = new Pessoa();  /*instancia é uma ocorrencia de uma pessoa ou seja aas caracteristicas de uma pessoa*/
    paulo.nome = 'Paulo Alex scherer',
    paulo.idade =  49,

  console,log(paulo);
    
const ane = new Pessoa();  /*instancia*/
  ane.nome = 'Ane Luci scherer',
  ane.idade =  51,

console,log(paulo);
console,log(ane);