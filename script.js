const students = [
  {
    name: 'joão',
    firstGrade: 7,
    secondGrade: 5
  },
  {
    name: 'Letícia',
    firstGrade: 9,
    secondGrade: 10
  },
  {
    name: 'Diego',
    firstGrade: 8,
    secondGrade: 10
  },
  {
    name: 'Júlia',
    firstGrade: 6,
    secondGrade: 5
  },
  {
    name: 'Maria',
    firstGrade: 4,
    secondGrade: 8
  }
]

function averageGrades(firstGrade, secondGrade) {
  let average = ((firstGrade + secondGrade) / 2).toFixed(1)
  return average
}

for (let student of students) {
  let average = averageGrades(student.firstGrade, student.secondGrade)
  student.average = average
  if (student.average >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${student.average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} é: ${student.average}
    Não foi dessa vez, ${student.name}! Tente novamente`)
  }
}
