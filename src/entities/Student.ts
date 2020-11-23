import Log from '../decorators/Log.js'
import Version from '../decorators/Version.js'
import Gender from './Gender.js'
import Person from './Person.js'

@Log('Test')
@Version<Student>('1.5.1')
export class Student extends Person implements IShowYourself {
  private _number: number
  public course: string

  constructor (number: number, name: string, gender: Gender, course: string) {
    super(name, gender)

    if (!name) {
      throw new ReferenceError('name')
    }

    if (!gender) {
      throw new ReferenceError('gender')
    }

    if (!course) {
      throw new ReferenceError('course')
    }

    if (number == 1234 || number == 5678 || number == 9012) {
      this._number = number
    } else {
      throw new Error('Formato de RA inválido')
    }

    this.course = course
  }

  get number() {
    return this._number
  }

  public showYourself () {
    if (this.gender === Gender.Male) {
      return `Sou um aluno, meu nome é ${this.name}.`
    } else {
      return `Sou uma aluna, meu nome é ${this.name}.`
    }
  }

  public showYourselfWithGreeting (greeting: string) {
    return this.showYourself() + ' ' + greeting
  }
}

export default Student
