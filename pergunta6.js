class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        return `Olá, meu nome é ${this.name}.`;
    }
}

const persona1 = new Person("João");
const persona2 = new Person("Maria")

console.log(persona1.greet()+ " " + persona2.greet());

//resposta certa = a