{
  const nome = document.querySelector<HTMLInputElement>('#nome')!
  const nascimento = document.querySelector<HTMLInputElement>('#nascimento')!
  const sexo = document.querySelector<HTMLSelectElement>('#sexo')!
  const termosAceitos = document.querySelector<HTMLInputElement>('#termosAceitos')!
  const formulario = document.querySelector<HTMLFormElement>('form')!
  const resposta = document.querySelector<HTMLDivElement>('#resposta')!

  formulario.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    if (!nome.value) {
      resposta.innerText = 'O campo Nome é obrigatório!'
      resposta.className = 'negative'
      return
    }

    if (!nascimento.value) {
      resposta.innerText = 'O campo Nascimento é obrigatório!'
      resposta.className = 'negative'
      return
    }

    if (!sexo.value) {
      resposta.innerText = 'O campo Sexo é obrigatório!'
      resposta.className = 'negative'
      return
    }

    if (!termosAceitos.checked) {
      resposta.innerText = 'É preciso aceitar os termos antes de prosseguir.'
      resposta.className = 'negative'
      return
    }

    resposta.innerText = 'Uhuuuu!'
    resposta.className = 'positive'
  })
}
