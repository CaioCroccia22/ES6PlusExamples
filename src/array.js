
// ForEach ------------------------------------------------------
const redeSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0 ;i < redeSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redeSociais[i]}`);
}

redeSociais.forEach(function(nomeDaRede, indice){
    console.log(`#${indice}# Eu tenho perfil na rede social: ${nomeDaRede}`);
})


// Map ------------------------------------------------------------------
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Front-End'
    }
    return itemAtual;
})

console.log(alunos2);

const numero = [1, 2, 3, 4, 5]
const dobroDosNumeros = numero.map(function(numeroAtual){
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})
console.log(dobroDosNumeros);


// Find -------------------------------------------

const paula = alunos2.find(function(item){
    return item.nome == 'Paula'; //true or false
})

console.log(paula)

//FindIndex -----------------------------------------
const paulaIndex = alunos.findIndex(function(item){
    return item == 'Paula';
})

console.log(paulaIndex);

//Every ----------------------


alunos2.push({
    nome: 'Lucio',
    curso: 'Back-End'
})

const todosAlunosFront = alunos2.every(function(item){
    return item.curso === 'Front-End'
})

console.log(todosAlunosFront);


//Some-----------------------------------------

const existeAlgumAlunoDeBackEnd = alunos2.some(function(item){
    return item.curso == 'Back-End';
})

console.log(existeAlgumAlunoDeBackEnd);

//Filter=========================

function filtraAlunoDeBackEnd(aluno){
    return aluno.curso === 'Back-End';
}

const alunosDeBackEnd = alunos2.filter(filtraAlunoDeBackEnd);

console.log(alunosDeBackEnd);

//reduce----------------------------------------

const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);