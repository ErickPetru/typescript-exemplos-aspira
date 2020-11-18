{
  const campo = document.querySelector<HTMLInputElement>('input')!
  const formulario = document.querySelector<HTMLFormElement>('form')!

  campo.focus()

  formulario.addEventListener('submit', (event: Event) => {
    event.preventDefault()

    let p = document.querySelector<HTMLParagraphElement>('#mensagem')

    if (!p) {
      p = document.createElement('p')
      p.id = 'mensagem'
      document.body.append(p)
    }

    if (campo.value) {
      p.innerText = `Olá, ${campo.value}!`
      p.className = 'positive'
      campo.className = ''
    } else {
      p.innerText = 'Olá mundo!'
      p.className = 'negative'
      campo.className = 'negative'
    }

    campo.value = ''
    campo.focus()
  })
}
