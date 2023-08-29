/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.
*/
/*
Depois de criada a lista:
- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;

- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let contest = [
  {
    name: "Paula",
    noteOne: 2.5,
    noteTwo: 4,
  },
  {
    name: "Fernanda",
    noteOne: 4,
    noteTwo: 7,
  },
  {
    name: "Afonso",
    noteOne: 4.5,
    noteTwo: 3,
  },
  {
    name: "Joaquim",
    noteOne: 8.5,
    noteTwo: 6,
  }
]

function calculateNote(student) {
  let average = (student.noteOne + student.noteTwo) / 2;

  if(average >= 7) {
    alert(`A média do aluno(a) ${student.name} é: ${average.toFixed(2)}. \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do aluno(a) ${student.name} é: ${average.toFixed(2)}. \n Não foi dessa vez ${student.name}! Tente novamente!`)
  }
}

// Iterar sobre a lista de estudantes e calcular as notas
for (let i = 0; i < contest.length; i++) {
  calculateNote(contest[i]);
}
