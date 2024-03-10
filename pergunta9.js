class SomadorDeNotas {
    constructor() {
      this.total = 0;
    }
  
    adicionarNota(nota) {
      this.total += nota;
    }
  
    verTotal() {
      console.log(`O total das notas é: ${this.total}`);
    }
  }
  
  
  const somador = new SomadorDeNotas();

  somador.adicionarNota(8.5);
  somador.adicionarNota(8);
  somador.adicionarNota(9);

  somador.verTotal(); 