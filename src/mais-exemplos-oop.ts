namespace Escola {
  export enum Sexo {
    Feminino = 'f',
    Masculino = 'm'
  }

  class Pessoa {
    nome: string
    sexo: Sexo

    constructor (nome: string, sexo: Sexo) {
      this.nome = nome
      this.sexo = sexo
    }

    apresentarSe () {
      const artigo = this.sexo === Sexo.Masculino ? 'o' : 'a'
      return `Olá, eu sou ${artigo} ${this.nome}.`
    }
  }

  export class Aluno extends Pessoa {
    #ra: number
    curso: string

    constructor (ra: number, nome: string, sexo: Sexo, curso: string) {
      super(nome, sexo)

      if (ra == 1234 || ra == 5678 || ra == 9012) {
        this.#ra = ra
      } else {
        throw new Error('Formato de RA inválido')
      }

      this.curso = curso
    }

    // Accessors
    get ra() {
      return this.#ra
    }

    set ra(value: number) {
      if (value == 1234 || value == 5678 || value == 9012) {
        this.#ra = value
      } else {
        throw new Error('Formato de RA inválido')
      }
    }
  }

  export class Professor extends Pessoa { }
}

{
  const aluno1 = new Escola.Aluno(1234, 'Julio', Escola.Sexo.Masculino, 'Programa Aspira')
  const aluno2 = new Escola.Aluno(5678, 'Yasmin', Escola.Sexo.Feminino, 'Programa Aspira')
  const aluno3 = new Escola.Aluno(9012, 'Mikael', Escola.Sexo.Masculino, 'Programa Aspira')

  // const aluno4 = new Escola.Aluno(2000, 'Credisvaldo', Escola.Sexo.Masculino, 'Sistemas para Internet')

  // aluno1.ra = 9999

  const alunos = [aluno1, aluno2, aluno3]
  console.log(alunos)

  console.log(aluno1.apresentarSe())
  console.log(aluno2.apresentarSe())
  console.log(aluno3.apresentarSe())

  const prof = new Escola.Professor('Erick', Escola.Sexo.Masculino)

  console.log(prof)

  console.log(prof.apresentarSe())
}

// Exemplo super rápido e resumido de herança por prototipação.
// function Animal (nome: string) {
//   this.nome = nome
// }
// Animal.prototype.falar = () => alert('Oi')

// function Gato (nome: string) { }
// Gato.prototype = Animal

// function Cachorro (nome: string) { }
// Cachorro.prototype = Animal
