import Gender from './entities/Gender.js'
import Student from './entities/Student.js'

const number = document.querySelector<HTMLInputElement>('#number')!
const name = document.querySelector<HTMLInputElement>('#name')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const course = document.querySelector<HTMLInputElement>('#course')!
const loading = document.querySelector<SVGElement>('#loading')!
const message = document.querySelector<HTMLParagraphElement>('#message')!
const form = document.querySelector('form')!
const table = document.querySelector('table')!

const students: Student[] = []

showStudents()
number.focus()

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
      const student = new Student(
        parseInt(number.value, 10),
        name.value,
        gender.value === 'f' ? Gender.Female : Gender.Male,
        course.value
      )

      students.push(student)

      // Serialização no JS ocorre em forma de JSON
      localStorage.setItem('students', JSON.stringify(students))
      showStudents()
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

function showStudents() {
  if (localStorage.getItem('students')) {
    const data = JSON.parse(localStorage.getItem('students')!)

    students.splice(0)

    for (const item of data) {
      students.push(new Student(
        item._number,
        item.name,
        item.gender,
        item.course
      ))
    }
  }

  let lines = ''

  for (const student of students) {
    lines += `
      <tr>
        <td>${ student.number }</td>
        <td>${ student.course }</td>
        <td>${ student.gender }</td>
        <td>${ student.showYourself() }</td>
      </tr>
    `
  }

  table.style.display = 'table'
  table.innerHTML = `
    <thead>
      <tr>
        <th>RA</th>
        <th>Curso</th>
        <th>Sexo</th>
        <th>Auto-Apresentação</th>
      </tr>
    </thead>
    <tbody>
      ${lines}
    </tbody>
  `
}
