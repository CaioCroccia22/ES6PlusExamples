"use strict";

// ForEach ------------------------------------------------------
var redeSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redeSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redeSociais[i]));
}
redeSociais.forEach(function (nomeDaRede, indice) {
  console.log("#".concat(indice, "# Eu tenho perfil na rede social: ").concat(nomeDaRede));
});

// Map ------------------------------------------------------------------
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Front-End'
  };
  return itemAtual;
});
console.log(alunos2);
var numero = [1, 2, 3, 4, 5];
var dobroDosNumeros = numero.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});
console.log(dobroDosNumeros);

// Find -------------------------------------------

var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //true or false
});
console.log(paula);

//FindIndex -----------------------------------------
var paulaIndex = alunos.findIndex(function (item) {
  return item == 'Paula';
});
console.log(paulaIndex);

//Every ----------------------

alunos2.push({
  nome: 'Lucio',
  curso: 'Back-End'
});
var todosAlunosFront = alunos2.every(function (item) {
  return item.curso === 'Front-End';
});
console.log(todosAlunosFront);

//Some-----------------------------------------

var existeAlgumAlunoDeBackEnd = alunos2.some(function (item) {
  return item.curso == 'Back-End';
});
console.log(existeAlgumAlunoDeBackEnd);

//Filter=========================

function filtraAlunoDeBackEnd(aluno) {
  return aluno.curso === 'Back-End';
}
var alunosDeBackEnd = alunos2.filter(filtraAlunoDeBackEnd);
console.log(alunosDeBackEnd);

//reduce----------------------------------------

var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);