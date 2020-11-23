import Log from '../decorators/Log.js'
import Gender from './Gender.js'

@Log('Test')
export class Person implements IShowYourself {
  public name: string
  public gender: Gender

  constructor (name: string, gender: Gender) {
    this.name = name
    this.gender = gender
  }

  public showYourself () {
    const article = this.gender === Gender.Male ? 'o' : 'a'
    return `Olá, eu sou ${article} ${this.name}.`
  }
}

export default Person
