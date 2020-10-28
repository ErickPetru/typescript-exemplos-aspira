{
  const campo = document.querySelector<HTMLInputElement>('.custom-input')!
  const formulario = document.querySelector<HTMLFormElement>('form')!

  formulario.addEventListener('submit', (event: Event) => {
    event.preventDefault()

    let p = document.querySelector<HTMLParagraphElement>('#mensagem')

    if (!p) {
      p = document.createElement('p')
      p.id = 'mensagem'
      formulario.append(p)
    }

    if (campo.value) {
      p.innerText = `Olá, ${campo.value}!`
    } else {
      p.innerText = 'Olá mundo!'
    }
  })
}
