import { createDatePicker } from './DatePicker.js'

const nome = document.querySelector<HTMLInputElement>('#nome')!
const email = document.querySelector<HTMLInputElement>('#email')!
const nascimento = createDatePicker('#nascimento')!
const sexo = document.querySelector<HTMLSelectElement>('#sexo')!
const termosAceitos = document.querySelector<HTMLInputElement>('#termosAceitos')!
const formulario = document.querySelector<HTMLFormElement>('form')!
const resposta = document.querySelector<HTMLDivElement>('#resposta')!

nome.focus()

formulario.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  nome.className = email.className = nascimento.className = sexo.className = ''

  const valorNome = nome.value.trim()

  if (!valorNome) {
    resposta.innerText = 'O campo Nome é obrigatório!'
    resposta.className = 'negative'
    nome.className = 'negative'
    nome.focus()
    return
  }

  const regexNome = /\w+\s\w+/g

  if (!regexNome.test(valorNome)) {
    resposta.innerText = 'Informe seu nome completo!'
    resposta.className = 'negative'
    nome.className = 'negative'
    nome.focus()
    return
  }

  if (!email.value) {
    resposta.innerText = 'O campo E-mail é obrigatório!'
    resposta.className = 'negative'
    email.className = 'negative'
    email.focus()
    return
  }

  const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

  if (!regexEmail.test(email.value)) {
    resposta.innerText = 'Formato de E-mail inválido!'
    resposta.className = 'negative'
    email.className = 'negative'
    email.focus()
    return
  }

  if (!nascimento.value) {
    resposta.innerText = 'O campo Nascimento é obrigatório!'
    resposta.className = 'negative'
    nascimento.className = 'negative'
    nascimento.focus()
    return
  }

  const dataNascimento = new Date(`${nascimento.value}T00:00:00`)
  console.log(nascimento.value)

  if (Date.now() - Number(dataNascimento) < 0) {
    resposta.innerText = 'O nascimento deve ter ocorrido no passado!'
    resposta.className = 'negative'
    nascimento.className = 'negative'
    nascimento.focus()
    return
  }

  if (!sexo.value) {
    resposta.innerText = 'O campo Sexo é obrigatório!'
    resposta.className = 'negative'
    sexo.className = 'negative'
    sexo.focus()
    return
  }

  if (!termosAceitos.checked) {
    resposta.innerText = 'É preciso aceitar os termos antes de prosseguir.'
    resposta.className = 'negative'
    termosAceitos.focus()
    return
  }

  resposta.innerText = ''
  resposta.className = 'positive'

  let resultado = `<p>Olá, ${valorNome}. Apresente estes documentos:</p>`

  resultado += `<ul>`
  resultado += `<li>Documento pessoal com foto (RG, CNH)</li>`

  const hoje = new Date()
  let idade = hoje.getFullYear() - dataNascimento.getFullYear()

  if (dataNascimento.getMonth() > hoje.getMonth()) {
    idade--
  } else if (hoje.getMonth() == dataNascimento.getMonth()) {
    if (dataNascimento.getDate() > hoje.getDate()) {
      idade--
    }
  }

  if (sexo.value === 'm' && idade > 17) {
    resultado += `<li>Documento de cumprimento com as obrigações militares (ou certificado de dispensa)</li>`
  }

  if (idade > 15 && idade < 18 || idade > 69) {
    resultado += `<li>Opcionalmente pode apresentar o título eleitoral</li>`
  } else if (idade > 17 && idade < 70) {
    resultado += `<li>Título eleitoral e comprovante de votação na última eleição</li>`
  }

  resposta.innerHTML = resultado + `</ul>`
})
