import Gender from './entities/Gender.js'
import Student from './entities/Student.js'

let names = ['Erick', 'Joice', 'Adilson', 'Tânia']

// O método sort causa mutação (efeito colateral) nos dados do próprio Array.
console.clear()
console.log('Array ordenado: ', names.sort())
console.log('Array original: ', names)

names = ['Erick', 'Joice', 'Adilson', 'Tânia']

// Usando o Spread, conseguimos criar uma ordenação válida para Programação Funcional.
const namesSorted = [...names].sort()

console.clear()
console.log('Array ordenado: ', namesSorted)
console.log('Array original: ', names)

let numbers = [10, 5, -8, 0, 13, -2]

const sortNumbers = (a: number, b: number) => a - b

console.clear()
console.log('Array ordenado: ', [...numbers].sort(sortNumbers))
console.log('Array original: ', numbers)

const cães = [
  { nome: 'Nick', raça: 'Spitz Alemão' },
  { nome: 'Vagabundo', raça: 'Vira-Lata' },
  { nome: 'Nina', raça: 'Poodle' },
]

const sortNomesCães = (a: typeof cães[0], b: typeof cães[0]) =>
  a.nome.localeCompare(b.nome)

console.clear()
console.log('Array ordenado: ', [...cães].sort(sortNomesCães))
console.log('Array original: ', cães)

names = ['Erick', 'Joice', 'Adilson', 'Tânia']

// Exemplo de filtro usando Programação Imperativa.
// let namesWithE = []
// for (const name of names) {
//   if (name.includes('E') || name.includes('e')) {
//     namesWithE.push(name)
//   }
// }

// Mesma coisa filtrando em uma abordagem puramente Funcional.
const filterStringsWithE = (text: string) => text.toUpperCase().includes('E')
const namesWithE = names.filter(filterStringsWithE)

console.clear()
console.log('Array filtrado: ', namesWithE)
console.log('Array original: ', names)

const onlyPoodle = (obj: typeof cães[0]) => obj.raça === 'Poodle'

console.clear()
console.log('Array filtrado: ', cães.filter(onlyPoodle))
console.log('Array original: ', cães)

const students = [
  new Student(1234, 'Mykaelly', Gender.Female, 'Programa Aspira'),
  new Student(5678, 'Bruno', Gender.Male, 'Programa Aspira'),
  new Student(9012, 'Lucas', Gender.Male, 'Programa Aspira'),
  new Student(1234, 'Marcelo', Gender.Male, 'Programa Aspira'),
]

const onlyMale = (obj: Student) => obj.gender === Gender.Male

console.clear()
console.log('Array filtrado: ', students.filter(onlyMale))
console.log('Array original: ', students)

const extractName = (obj: Student) => obj.name

console.clear()
console.log('Nomes extraídos: ', students.map(extractName).join(' - '))
console.log('Array original: ', students)

const select = document.createElement('select')
select.append(
  ...students.map((obj: Student) =>
    new Option(obj.name, obj.number.toString())
  )
)
document.body.append(select)

numbers = [2, 3, 5]

// É possível resolver de forma imperativa tradicional.
let sum = 0
for (const n of numbers) {
  sum += n
}

console.clear()
console.log(sum)

// Possibilidade reduzir um conjunto de dados em um único valor.
const sumAll = (result: number, current: number) => result + current
console.log(numbers.reduce(sumAll, 0))

let products = [
  { id: 1, title: 'Sapato Social', price: 69.9 },
  { id: 2, title: 'Tênis Esportivo', price: 139.9 },
  { id: 3, title: 'Meia', price: 14.95 },
  { id: 4, title: 'Relógio', price: 1285.75 },
  { id: 5, title: 'Bola de Basquete', price: 30 },
  { id: 6, title: 'Videogame', price: 7950 },
]

const sumPrices = (result: number, current: typeof products[0]) =>
  result + current.price

console.clear()
console.log('Preço total: ', products.reduce(sumPrices, 0))
console.log('Média de preços: ', products.reduce(sumPrices, 0) / products.length)

console.log(products.reduce((r: number, c: typeof products[0]) =>
  r + c.id, 0))

const product = JSON.parse(JSON.stringify(products.find((product) => product.id === 3)!))
product.title = 'Meia Alterada'

console.log(product)
console.log(products)
