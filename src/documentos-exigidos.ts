{
  const nome = document.querySelector<HTMLInputElement>('#nome')!
  const email = document.querySelector<HTMLInputElement>('#email')!
  const nascimento = document.querySelector<HTMLInputElement>('#nascimento')!
  const sexo = document.querySelector<HTMLSelectElement>('#sexo')!
  const termosAceitos = document.querySelector<HTMLInputElement>('#termosAceitos')!
  const formulario = document.querySelector<HTMLFormElement>('form')!
  const resposta = document.querySelector<HTMLDivElement>('#resposta')!

  formulario.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const valorNome = nome.value.trim()

    if (!valorNome) {
      resposta.innerText = 'O campo Nome é obrigatório!'
      resposta.className = 'negative'
      nome.focus()
      return
    }

    const regexNome = /\w+\s\w+/g

    if (!regexNome.test(valorNome)) {
      resposta.innerText = 'Informe seu nome completo!'
      resposta.className = 'negative'
      nome.focus()
      return
    }

    if (!email.value) {
      resposta.innerText = 'O campo E-mail é obrigatório!'
      resposta.className = 'negative'
      email.focus()
      return
    }

    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if (!regexEmail.test(email.value)) {
      resposta.innerText = 'Formato de E-mail inválido!'
      resposta.className = 'negative'
      email.focus()
      return
    }

    if (!nascimento.value) {
      resposta.innerText = 'O campo Nascimento é obrigatório!'
      resposta.className = 'negative'
      nascimento.focus()
      return
    }

    const dataNascimento = new Date(`${nascimento.value}T00:00:00`)

    if (Date.now() - Number(dataNascimento) < 0) {
      resposta.innerText = 'O nascimento deve ter ocorrido no passado!'
      resposta.className = 'negative'
      nascimento.focus()
      return
    }

    if (!sexo.value) {
      resposta.innerText = 'O campo Sexo é obrigatório!'
      resposta.className = 'negative'
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

    resposta.innerHTML = `<p>Olá, ${valorNome}. Apresente estes documentos:</p>`
    resposta.innerHTML += `<ul>`
    resposta.innerHTML += `<li>Documento pessoal com foto (RG, CNH)</li>`

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
      resposta.innerHTML += `<li>Documento de cumprimento com as obrigações militares (ou certificado de dispensa)</li>`
    }

    if (idade > 15 && idade < 18 || idade > 69) {
      resposta.innerHTML += `<li>Opcionalmente título eleitoral</li>`
    } else if (idade > 17 && idade < 70) {
      resposta.innerHTML += `<li>Título eleitoral e comprovante de votação na última eleição</li>`
    }

    resposta.innerHTML += `</ul>`
  })
}
