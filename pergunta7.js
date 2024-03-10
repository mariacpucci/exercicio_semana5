class Animal{
    constructor(nome, idade){
        this.name = nome;
        this.idade = idade;
    }
    descrever(){
        console.log( `O animal se chama ${this.name} e tem ${this.idade} de anos`)
    }
}

const animal1 = new Animal("cachorro", 4);
const animal2 = new Animal("gato", 2);

animal1.descrever();
animal2.descrever();