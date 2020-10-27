const campo1 = document.querySelector<HTMLInputElement>('#campo1')!
const campo2 = document.querySelector<HTMLInputElement>('#campo2')!
const formulario = document.querySelector<HTMLFormElement>('form')!
const mensagem = document.querySelector<HTMLParagraphElement>('#mensagem')!

formulario.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let n1 = parseInt(campo1.value)
  let n2 = parseInt(campo2.value)

  if (isNaN(n1)) {
    mensagem.innerText = 'O primeiro número foi preenchido incorretamente!'
    campo1.focus()
    return
  }

  if (isNaN(n2)) {
    mensagem.innerText = 'O segundo número foi preenchido incorretamente!'
    campo2.focus()
    return
  }

  let soma = n1 + n2
  mensagem.innerText = `A soma de ${n1} + ${n2} é ${soma}.`
})
