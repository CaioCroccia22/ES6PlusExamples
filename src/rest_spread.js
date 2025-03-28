//Rest-----------------------------------------------------
function somar(){
    console.log(arguments); 
    //retorna todos os argumentos utilizados na função
    //Arguments -> Não é array, mas é possível iterar neles
    //return >>>> [Arguments] { '0': 10, '1': 20 }
    //Ele pode ser usado no caso de você não saber a quantidade de parametros

    let soma = 0;

    for (let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

console.log(somar(10,20,30));


function somarComRest(...numeros){
    //Rest - ... -> Pode receber inumeros argumentos
    //Javascript junta todos os argumentos e transforma em arrays
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 40))

//Spread--------------------------------------------------------------

const numeros = [1,2,3,4]

/*Diferente do rest não é um argumento de função é mais usado para fazer concatenações, console.log() e afins*/

const timesDeFutebolDeSp = ['Corinthians', 'Palmeiras', ' Santos'];

const timesDeFutebolDoRj = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRj);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRj];

console.log(timesDeFutebol);

const carroDaJulia = {
    carro: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);


// Desestruturação -----------------------

const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;
// Cria um alias para a propriedade motor 
// No caso o alias é motorDoCarraDaAna
