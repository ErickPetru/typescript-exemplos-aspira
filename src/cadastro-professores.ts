import Degree from './entities/Degree.js'
import Gender from './entities/Gender.js'
import Teacher from './entities/Teacher.js'

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

const intervalId = setInterval(() => {
  if (document.body.style.background === 'rgb(102, 0, 102)') {
    document.body.style.background = 'rgb(21, 21, 21)'
  } else {
    document.body.style.background = 'rgb(102, 0, 102)'
  }
}, 1000)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  clearInterval(intervalId)

  document.body.style.background = 'rgb(21, 21, 21)'
  message.innerText = ''
  table.style.display = 'none'
  form.style.display = 'none'
  loading.style.display = 'block'

  // TODO: Construir validações dos campos.

  setTimeout(() => {
    try {
      const teacher = new Teacher(
        name.value,
        gender.value === 'f' ? Gender.Female : Gender.Male,
        degree.value as Degree
      )

      teachers.push(teacher)

      // Serialização no JS ocorre em forma de JSON
      localStorage.setItem('teachers', JSON.stringify(teachers))
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
        name.value,
        gender.value === 'f' ? Gender.Female : Gender.Male,
        degree.value as Degree
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
