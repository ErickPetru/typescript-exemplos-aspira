interface Ctor<T> {
  new(...args: any[]): T
}

function Version<T>(version: string) {
  type ExtendedType = T & {
    version: string
    getVersion: () => string
  }

  return function <Constructor extends Ctor<T>>(ctor: Constructor) {
    const extended = class extends (ctor as Ctor<any>) {
      public version: string

      constructor(...args: any[]) {
        super(...args)
        this.version = version
      }

      getVersion() {
        return `I'm a Decorator who extended the class '${ctor.name}' setting "${this.version}" for the 'version' property.`
      }
    } as Ctor<ExtendedType>

    Object.defineProperty(extended, 'name', {
      value: ctor.name,
      configurable: true,
    })

    return extended
  }
}

export default Version
