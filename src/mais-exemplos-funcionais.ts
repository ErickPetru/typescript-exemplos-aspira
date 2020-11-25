// Exemplo simples de função pura sem efeitos colaterais.
function oldSchoolAdd (a: number, b: number) {
  return a + b
}

// Podemos chamar estas funções de "First-Order Function".
const add = (a: number, b: number) => a + b
const multiply = (a: number, b: number) => a * b

console.clear()
console.log(add(2, 3))
console.log(multiply(2, 3))

// Podemos criar abstrações de chamadas, vinculando uma função
// em uma chamada mais específica que abstrair os parâmetros.

// Isto também recebe o nome de "Currying" de função.
const addTwoAndFive = () => add(2, 5)

console.clear()
console.log(addTwoAndFive())

// "Currying" também pode ser usado em cenários não Funcionais.
// Isto pois new Date torna a função em impura.
const getDateNow = () => new Date()

console.clear()
console.log(getDateNow())

// Criando uma função de apoio para ilustrar "High-Order Function".
const sayHello = () => console.log('Hello!')

console.clear()

// "High-Order Functions" operam a partir de outras funções,
// recebidas como parâmetro.
// setTimeout(sayHello, 3000)
// setTimeout(() => console.log('Goodbye!'), 3000)

// JavaScript é assíncrona por natureza, ou seja, a linguagem
// não espera uma função terminar antes de executar a outra,
// caso esta execução não seja imediata.
console.log('I say')
console.clear()

// Criando sua própria "High-Order Function"!
const runAndShowOnConsole =
  (fn: Function, ...args: any[]) => console.log(fn(...args))

// É possível passar argumentos para a função de alta ordem.
// setTimeout(runAndShowOnConsole, 3000, add, 10, 20)

const subtract = (...args: number[]) => {
  let r = args[0]

  for (let i = 1; i < args.length; i++) {
    r -= args[i]
  }

  return r
}

const divide = (...args: number[]) => {
  let r = args[0]

  for (let i = 1; i < args.length; i++) {
    r /= args[i]
  }

  return r
}

// setTimeout(runAndShowOnConsole, 3000, subtract, 10, 2, 5)

const calculate =
  (fn: Function, ...args: number[]) => fn(...args)

type OperationMap = {
  [key: string]: Function
}

const operations: OperationMap = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
}

const answer = prompt('Qual operação? + - * /')!
runAndShowOnConsole(calculate, operations[answer], 10, 5)
