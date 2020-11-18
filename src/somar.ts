{
  const campo1 = document.querySelector<HTMLInputElement>('#campo1')!
  const campo2 = document.querySelector<HTMLInputElement>('#campo2')!
  const formulario = document.querySelector<HTMLFormElement>('form')!
  const mensagem = document.querySelector<HTMLParagraphElement>('#mensagem')!

  campo1.focus()

  formulario.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    campo1.className = campo2.className = mensagem.className = ''

    let n1 = parseInt(campo1.value)
    let n2 = parseInt(campo2.value)

    if (isNaN(n1)) {
      mensagem.innerText = 'O primeiro número foi preenchido incorretamente!'
      campo1.className = mensagem.className = 'negative'
      campo1.focus()
      return
    }

    if (isNaN(n2)) {
      mensagem.innerText = 'O segundo número foi preenchido incorretamente!'
      campo2.className = mensagem.className = 'negative'
      campo2.focus()
      return
    }

    const soma = n1 + n2
    mensagem.innerHTML = `A soma de <b>${n1}</b> + <b>${n2}</b> é <b>${soma}</b>.`
    mensagem.className = 'positive'

    campo1.value = campo2.value = ''
    campo1.focus()
  })
}
