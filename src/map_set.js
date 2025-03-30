//O map é uma estrutura de diciionario, conjunto de valores, e esses valores são objetos
let meuMap = new Map();

//Criar o item
meuMap.set('Nome', 'Caio Croccia');
meuMap.set('Stack', 'html, css, js');
meuMap.set('Idade', '23');
console.log(meuMap);

//Pegar o item 
const getMyMap = meuMap.get('Nome');
console.log(getMyMap);

//Pegar a quantidade de itens
console.log(meuMap.size);

//Verificar se a chave tem no map
console.log(meuMap.has('Nome'));


//Fazer a limpeza do map
// meuMap.clear();

// console.log(meuMap.size);


//Iteração pelo Map
//Para chamar os valores trocar keys por value ou entries para saber a entrada
for (let chave of meuMap.keys()){
    console.log(chave);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}:  ${valor}`);
}

meuMap.delete('Stack');
console.log(meuMap);


// Set------------------------------------------
// Os valores não podem repetir dentro do Set

const cpfs = new Set();

cpfs.add('73078154009');
cpfs.add('87610204005');
cpfs.add('73407482027');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

// As funções do Map também pode ser usada aqui

cpfs.forEach((valor) => {
    console.log(valor);
})

// Criar uma listagem de itens únicos
const array = ['Caio Croccia', 'Maria Isabel', 'Luana Gomes', 'Matheus Olivo', 'Luana Gomes']