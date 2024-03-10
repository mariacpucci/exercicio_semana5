class Animal{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    descrever(){
        console.log( `O animal se chama ${this.nome} e tem ${this.idade} de anos`)
    }
}

class Gato extends Animal{
    constructor(nome, idade, cor){
        super(nome, idade)
        this.cor = cor
    }
    descrever(){
        console.log( `O animal se chama ${this.nome} e tem ${this.idade} de anos e de cor ${this.cor}`)
    }
    miar(){
        console.log(`O gato ${this.nome} mia`)
    }
}

const animal1 = new Animal("cachorro", 4);
const animal2 = new Gato("gato", 2,"castanho");

animal1.descrever();
animal2.descrever();
animal2.miar()