import Degree from './entities/Degree.js'
import Gender from './entities/Gender.js'
import Teacher from './entities/Teacher.js'
import { trimAll, capitalize } from './string-functions.js'

const name = document.querySelector<HTMLInputElement>('#name')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const degree = document.querySelector<HTMLSelectElement>('#degree')!
const loading = document.querySelector<SVGElement>('#loading')!
const message = document.querySelector<HTMLParagraphElement>('#message')!
const form = document.querySelector('form')!
const table = document.querySelector('table')!

const teachers: Teacher[] = []

showTeachers()
name.focus()

gender.addEventListener('change', () => {
  if (gender.value === 'f') {
    document.body.style.background = 'rgb(102, 0, 102)'
  } else if (gender.value === 'm') {
    document.body.style.background = 'rgb(0, 0, 102)'
  } else {
    document.body.style.background = 'rgb(21, 21, 21)'
  }
})

gender.addEventListener('change', () => {
  console.log(gender.value)
})

// const intervalId = setInterval(() => {
//   if (document.body.style.background === 'rgb(102, 0, 102)') {
//     document.body.style.background = 'rgb(21, 21, 21)'
//   } else {
//     document.body.style.background = 'rgb(102, 0, 102)'
//   }
// }, 1000)

function isFormValid (...elements: (HTMLInputElement | HTMLSelectElement)[]) {
  for (const element of elements) {
    if (element.value) {
      element.className = ''
    } else {
      message.innerText = element.getAttribute('data-message')!
      message.className = element.className = 'negative'
      element.focus()
      return false
    }
  }

  return true
}

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  // clearInterval(intervalId)

  if (!isFormValid(name, gender, degree)) return false

  document.body.style.background = 'rgb(21, 21, 21)'
  message.innerText = ''
  table.style.display = 'none'
  form.style.display = 'none'
  loading.style.display = 'block'

  setTimeout(() => {
    try {
      const teacher = new Teacher(
        capitalize(trimAll(name.value)),
        gender.value === 'f' ? Gender.Female : Gender.Male,
        degree.value as Degree
      )

      teachers.push(teacher)

      // Serialização no JS ocorre em forma de JSON
      localStorage.setItem('teachers', JSON.stringify(teachers))

      name.className = name.value = ''
      gender.className = gender.value = ''
      degree.className = degree.value = ''

      showTeachers()
    } catch (error: any) {
      console.error(error)
      message.innerText = 'Opa, ocorreu um erro aqui.'
      message.className = 'negative'
    } finally {
      form.style.display = 'flex'
      loading.style.display = 'none'
    }
  }, 3000)
})

function showTeachers() {
  if (localStorage.getItem('teachers')) {
    const data = JSON.parse(localStorage.getItem('teachers')!)

    teachers.splice(0)

    for (const item of data) {
      teachers.push(new Teacher(
        item.name,
        item.gender === 'f' ? Gender.Female : Gender.Male,
        item.degree as Degree
      ))
    }
  }

  let lines = ''

  for (const teacher of teachers) {
    lines += `
      <tr>
        <td>${ (teacher as IShowYourself).name }</td>
        <td>${ (teacher as IShowYourself).showYourself() }</td>
      </tr>
    `
  }

  table.style.display = 'table'
  table.innerHTML = `
    <thead>
      <tr>
        <th>Nome</th>
        <th>Auto-Apresentação</th>
      </tr>
    </thead>
    <tbody>
      ${lines}
    </tbody>
  `
}
