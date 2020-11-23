export function Log(prefix: string) {
  return (target: any) => {
    console.log(`I'm a Decorator with prefix "${prefix}" for the class '${target.name}'.`)
  }
}

export default Log
