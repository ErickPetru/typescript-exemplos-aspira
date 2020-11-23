import Degree from './Degree.js'
import Gender from './Gender.js'
import Person from './Person.js'

export class Teacher extends Person implements IShowYourself {
  public degree: Degree

  constructor (name: string, gender: Gender, degree: Degree) {
    super(name, gender)

    this.degree = degree
  }
}

export default Teacher
