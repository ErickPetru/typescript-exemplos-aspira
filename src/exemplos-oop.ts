enum Sexo {
  Feminino = 'f',
  Masculino = 'm',
}

type Professor = {
  nome: string,
  sexo: Sexo,
}

// Poderíamos ter declaração de tipos para objetos literais.
// type Aluno = {
//   ra: string | number,
//   nome: string,
//   sexo: Sexo,
//   curso: string,
// }

// E até mesmo com extensão de tipo a partir de tipo.
// type AlunoComMetodos = Aluno & {
//   dizerNome(): string,
//   mudarSexo(): void,
// }

/* Mas classe é melhor quando queremos reaproveitar comportamentos (métodos).
 * E também para habilitar a sintaxe de função contrutora ao criar uma instância.
 */
class Aluno {
  ra: string | number
  nome: string
  sexo: Sexo
  curso: string

  constructor (ra: string | number, nome: string, sexo: Sexo, curso: string) {
    this.ra = ra
    this.nome = nome
    this.sexo = sexo
    this.curso = curso
  }

  dizerNome () {
    return `Oi, eu sou o ${this.nome}.`
  }

  mudarSexo () {
    if (this.sexo == Sexo.Masculino) {
      this.sexo = Sexo.Feminino
    } else {
      this.sexo = Sexo.Masculino
    }
  }
}

const aluno1 = new Aluno(1234, 'Marcelo', Sexo.Masculino, 'Programa Aspira')
aluno1.nome = 'Maysa'
aluno1.sexo = Sexo.Feminino

const aluno2 = new Aluno(5678, 'Vitória', Sexo.Feminino, 'Programa Aspira')

const aluno3 = new Aluno(9012, 'Bruno', Sexo.Masculino, 'Programa Aspira')

const aluno4 = new Aluno(3132, 'Cidcleison', Sexo.Masculino, 'Sistemas para Internet')

const alunos = [aluno1, aluno2, aluno3, aluno4]

console.log(aluno1.dizerNome())
aluno1.mudarSexo()

console.log(aluno2.dizerNome())
aluno2.mudarSexo()

alunos[2].mudarSexo()

console.log(alunos)

const prof: Professor = {
  nome: 'Erick     Eduardo       Petrucelli',
  sexo: Sexo.Masculino,
}

console.log(prof)

/* É possível extender o prototype de objetos nativos,
 * mas o TypeScript não gosta muito disso. Dá para forçar destas forma:
 */

// declare global {
//   interface String {
//     removeDuplicateChars(): string
//   }
// }

// String.prototype.removeDuplicateChars = function () {
//   return this.replace(/ +/g, ' ')
// }

// console.log(prof.nome.removeDuplicateChars())
