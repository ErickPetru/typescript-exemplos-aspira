{
  const form = document.querySelector<HTMLFormElement>('form')!

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const nomes = [
      'ALESSANDRO BARROS PEREIRA',
      'ALEXANDRE TREVISAN RODRIGUES PEREIRA',
      'ALICE VITÓRIA CAVALCANTE DOS SANTOS',
      'ANA JULIA BITENCOURT BRANDÃO',
      'BRUNO RAFAEL DE RESENDE',
      'BRUNO VINICIUS SANTOS CALDEEF',
      'DOUGLAS SABIN BARBOSA',
      'GABRIEL LEON BRUGNOLO DE SOUZA',
      'GABRIEL SOSSAI SOARES',
      'GUILHERME LUÍS CAMARGO NETO',
      'JULIO PALMIERI TREICHEL',
      'LUCAS COSTA DE ALMEIDA',
      'MARCELO LUIZ BARALDI',
      'MARISTELA MENDES SANTOS',
      'MAYSA RIBEIRO MACEDO',
      'MIKAEL FERNANDO TAVARES BEZERRA',
      'MIRIÃ TAMIRES CAVALCANTE BATISTA',
      'MYKAELLY OLIVEIRA DE CARVALHO',
      'PAULO HENRIQUE CALLETTI',
      'RYAN GABRIEL ARAÚJO PEREIRA',
      'VINÍCIUS HENRIQUES CORTES',
      'VITÓRIA CAROLINE FERREIRA DE SOUZA',
      'WALLACE ANDERSON COSTA DA SILVA',
      'WICTOR SAMUEL SOUZA XAVIER',
      'YASMIN LESKI BORGES'
    ]

    const sorteado = Math.round(Math.random() * (nomes.length - 1))

    const p = document.createElement('p')
    document.body.append(p)

    p.innerText = capitalizar(nomes[sorteado])
    p.className = 'positive'
  })

  function capitalizar(texto: string) {
    const palavras = texto.toLowerCase().trim().replace(/\s+/g, ' ').split(' ')
    texto = palavras.map((p) => p.charAt(0).toUpperCase() + p.substr(1)).join(' ')
    return texto.replace(/\s(D(a|e|o)s?|E)\s/g, (artigo) => artigo.toLowerCase())
  }
}
