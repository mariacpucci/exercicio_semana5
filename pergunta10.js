// Classe base Funcionario
class Funcionario {
    // Construtor para inicializar os atributos básicos do funcionário
    constructor(nome, idade, salarioBase) {
      this.nome = nome; // Nome do funcionário
      this.idade = idade; // Idade do funcionário
      this.salarioBase = salarioBase; // Salário base do funcionário
    }
  
    // Método para calcular o salário total do funcionário
    // A implementação básica aqui não faz muito, porque é esperado que as subclasses sobrescrevam este método
    calcularSalario() {
      return this.salarioBase;
    }
  }
  
  // Classe Professor que herda de Funcionario
  class Professor extends Funcionario {
    // Construtor para inicializar os atributos do professor
    constructor(nome, idade, salarioBase, disciplina, horasAulaPorSemana, valorHoraAula) {
      super(nome, idade, salarioBase); // Chamada para o construtor da classe pai Funcionario
      this.disciplina = disciplina; // Disciplina que o professor ensina
      this.horasAulaPorSemana = horasAulaPorSemana; // Quantidade de horas de aula por semana
      this.valorHoraAula = valorHoraAula; // Valor recebido por hora/aula
    }
  
    // Método para calcular o salário do professor
    // O salário é calculado com base no número de horas de aula e no valor da hora/aula
    calcularSalario() {
      // O salário total é o salário base mais o pagamento pelas horas de aula
      return this.salarioBase + (this.horasAulaPorSemana * this.valorHoraAula * 4); // Multiplica-se por 4 para estimar o valor mensal
    }
  }
  
  // Criando dois objetos do tipo Professor com informações fictícias
  const professor1 = new Professor('João', 34, 2000, 'Inglês', 10, 54);
  const professor2 = new Professor('Maria', 34, 2500, 'Matemática', 8, 64);
  
  // Calculando e mostrando o salário dos professores
  console.log(`${professor1.nome} tem um salário de: ${professor1.calcularSalario()}`);
  console.log(`${professor2.nome} tem um salário de: ${professor2.calcularSalario()}`);
  