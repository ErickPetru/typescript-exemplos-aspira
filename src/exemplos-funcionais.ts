// Coisas que ferem o Paradigma da Programação Funcional.

// Não pode ter Funções Impuras:
// 1. Geram resultados diferentes em cada execução.

function randomNumber () {
  return Math.random()
}

console.clear()
console.log(randomNumber())

// 2. Baseadas em valores mutáveis (como datas).

function daysInCurrentMonth () {
  const now = new Date()
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)
  return nextMonth.getDate()
}

console.clear()
console.log(daysInCurrentMonth())

// Se eu quisesse criar algo parecido em Programação Funcional.
// Este é um exemplo de Função Pura para resolver este problema:
function daysInMonth (year: number, month: number) {
  const nextMonth = new Date(year, month, 0)
  return nextMonth.getDate()
}

console.clear()
console.log(daysInMonth(2020, 2))
console.log(daysInMonth(2020, 7))
console.log(daysInMonth(2020, 12))

// Regra mágica da Programação Funcional:
// Usou as mesmas entradas, tem que receber as mesmas saídas.

// Não pode ter Efeitos Colaterais:
// 1. Modificam dados (variáveis) externos...

let x = 1

function increment (quantity: number) {
  x += quantity
}

increment(5)
console.clear()
console.log(x)

// Exemplo sem gerar efeito colateral.
// Ainda não é Programação Funcional, pois depende de estado externo.
function incrementVersion2 (quantity: number) {
  return x + quantity
}

console.clear()
console.log(incrementVersion2(5))

// 2. Modificar os próprios parâmetros dentro da função...

function square (n: number) {
  n *= n
  return n
}

x = 3
console.clear()
console.log(square(x)) // Passagem de parâmetro por valor.
console.log(x)

// Quando a entrada for Array ou Object,
// a passagem de parâmetro é sempre por referência.
function squareArray (numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= numbers[i]
  }
  return numbers
}

let x2 = [2, 3, 5]
console.clear()
console.log(squareArray(x2)) // Passagem de parâmetro por referência.
console.log(x2)

// Nunca atribuir nada nos seus parâmetros,
// crie variáveis novas apenas para retornar as coisas.
function squareArrayVersion2 (numbers: number[]) {
  const result = []
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * numbers[i])
  }
  return result
}

x2 = [2, 3, 5]
console.clear()
console.log(squareArrayVersion2(x2))
console.log(x2)

// Passagem por referência também acontece para objetos.
// Ou seja, toda manipulação de objetos gera efeito colateral.
let teacher = { id: 1234, name: 'ERICK', gender: 'm' }

function capitalizeName (object: typeof teacher) {
  object.name = object.name.substr(0, 1).toUpperCase() +
    object.name.substr(1).toLowerCase()
  return object
}

console.clear()
console.log(capitalizeName(teacher)) // Passagem por referência.
console.log(teacher)

// Para fazer realmente como Programação Funcional:
// Retornar um novo objeto literal para evitar efeito colateral.
function capitalizeNameVersion2 (object: typeof teacher) {
  const name = object.name.substr(0, 1).toUpperCase() +
    object.name.substr(1).toLowerCase()
  // Desestruturação com Spread Operator.
  return { ...object, name }
}

teacher = { id: 1234, name: 'ERICK', gender: 'm' }
console.clear()
console.log(capitalizeNameVersion2(teacher))
console.log(teacher)
