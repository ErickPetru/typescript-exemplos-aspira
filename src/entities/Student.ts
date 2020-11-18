import Gender from './Gender.js'
import Person from './Person.js'

export class Student extends Person {
  private _number: number
  course: string

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
}

export default Student
