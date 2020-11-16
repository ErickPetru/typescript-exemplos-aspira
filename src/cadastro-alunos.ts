import Gender from './entities/Gender.js'
import Student from './entities/Student.js'

const number = document.querySelector<HTMLInputElement>('#number')!
const name = document.querySelector<HTMLInputElement>('#name')!
const gender = document.querySelector<HTMLSelectElement>('#gender')!
const course = document.querySelector<HTMLInputElement>('#course')!
const loading = document.querySelector<SVGElement>('#loading')!
const message = document.querySelector<HTMLParagraphElement>('#message')!
const form = document.querySelector('form')!

const students: Student[] = []

number.focus()

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  // TODO: Construir validações dos campos.

  try {
    loading.style.display = 'block'

    const student = new Student(
      parseInt(number.value, 10),
      name.value,
      gender.value === 'f' ? Gender.Female : Gender.Male,
      course.value
    )

    students.push(student)
  } catch (error: any) {
    console.error(error)
    message.innerText = 'Opa, ocorreu um erro aqui.'
  } finally {
    loading.style.display = 'none'
  }

  console.log(students)
})
