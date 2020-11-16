import Gender from './Gender.js'

export class Person {
  name: string
  gender: Gender

  constructor (name: string, gender: Gender) {
    this.name = name
    this.gender = gender
  }

  showYourself () {
    const article = this.gender === Gender.Male ? 'o' : 'a'
    return `Olá, eu sou ${article} ${this.name}.`
  }
}

export default Person
