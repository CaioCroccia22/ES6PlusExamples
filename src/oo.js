class Cachorro {

    // Encapsulamento
    #idade = 4;

    // Construtor  - inicialização de atributos da classe
    constructor(nomeDoCachorro, racaDoCachorro){
        this.nome = nomeDoCachorro;
        this.raca = racaDoCachorro;
    }

    // Metodo
    Latir(altura) {
        console.log(`${this.nome} latiu ${altura}`)
    }

    Aniversario(){
        this.#idade += 1;
    }

    exibeIdade(){
        console.log(this.#idade)
    }
}

// Herança
class Golden extends Cachorro {
    constructor(){
        super('Laika', 'Golden Retriver');
    }

    //Polimorfismo
    Latir(){
        console.log(`${this.nome} latiu baixo`)
    }
}




//Instância da Classe
const goldenRetriever = new Cachorro('Laika', 'Golden Retriver');

goldenRetriever.Latir('Baixo');

console.log(goldenRetriever);


// goldeRetriever.nome = 'Laika';
// goldeRetriever.raca = 'Golden Retriver'

// Herança
const goldenDoCaio = new Golden('Laika', 'Golden Retriver');

goldenDoCaio.Aniversario();

goldenDoCaio.exibeIdade();

console.log(goldenDoCaio.idade);

goldenDoCaio.Latir();

console.log(goldenDoCaio);

console.log(goldenDoCaio instanceof Golden);

console.log(goldenDoCaio instanceof Cachorro);