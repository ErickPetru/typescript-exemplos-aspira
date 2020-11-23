export function AnalyzeProperty(target: any, key: string) {
  console.log(`I'm a Decorator for property '${key}' of the class '${target.constructor.name}'.`)
}

export default AnalyzeProperty
