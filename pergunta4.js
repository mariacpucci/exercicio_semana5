class Carro {
    constructor(){
        this.velocidadeAtual = 0;
    }

    acelerar(velocidade){
        this.velocidadeAtual += velocidade;
    }
}

let carro = new Carro();

carro.acelerar(40);
console.log(carro.velocidadeAtual);

//resposta certa = a

