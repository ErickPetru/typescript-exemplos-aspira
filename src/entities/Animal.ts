import Version from '../decorators/Version.js'
import AnalyzeProperty from '../decorators/AnalyzeProperty.js'

@Version<Animal>('1.0')
export class Animal implements IShowYourself {
  @AnalyzeProperty
  public name: string

  constructor(name: string) {
    this.name = name
  }

  public showYourself() {
    return this.name
  }
}

export default Animal
