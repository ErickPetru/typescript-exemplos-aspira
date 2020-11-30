// As Strings possuem um cojunto de métodos para manipulação.
// Embora sejam métodos de um objeto, eles se comportam segundo o Paradigma Funcional.

const title = '   Tênis   Acessível   que Aumenta a Força do PÉ   MARCA   Plus  XYZ   Tamanho  39  '

// Um exemplo em um estilo bem imperativo de resolver...
let slug = title.toLowerCase()
slug = slug.trim()
slug = slug.replace(/\s+/g, '-')
slug = slug.replace(/[áàã]/g, 'a')
slug = slug.replace(/[éê]/g, 'e')
slug = slug.replace(/[í]/g, 'i')
slug = slug.replace(/[óõ]/g, 'o')
slug = slug.replace(/[úü]/g, 'u')
slug = slug.replace(/[ç]/g, 'c')

console.clear()
console.log(slug)

// Um exemplo criando uma função pura e sem efeitos colaterais.
let slugify = (text: string) => {
  // Mas aqui dentro, ainda parece imperativo...
  let slug = text.toLowerCase()
  slug = slug.trim()
  slug = slug.replace(/\s+/g, '-')
  slug = slug.replace(/[áàã]/g, 'a')
  slug = slug.replace(/[éê]/g, 'e')
  slug = slug.replace(/[í]/g, 'i')
  slug = slug.replace(/[óõ]/g, 'o')
  slug = slug.replace(/[úü]/g, 'u')
  slug = slug.replace(/[ç]/g, 'c')
  return slug
}

console.clear()
console.log(slugify(title))
console.log(slugify('  Meu EXEMPLO   BoNiTo   para Demonstrações   '))

// Programação Funcional curte usar "function chaining" (encadeamento de funções).
slugify = (text: string) => text
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[áàã]/g, 'a')
  .replace(/[éê]/g, 'e')
  .replace(/[í]/g, 'i')
  .replace(/[óõ]/g, 'o')
  .replace(/[úü]/g, 'u')
  .replace(/[ç]/g, 'c')

console.clear()
console.log(slugify(title))
console.log(slugify('  Meu EXEMPLO   BoNiTo   para Demonstrações   '))

// Exemplo funcional para capitalização de Strings (acertar maiúsculas e minúsculas)
const capitalize = (text: string) => {
  const words = text.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substr(0, 1).toUpperCase() +
      words[i].substr(1).toLowerCase()
  }

  return words.join(' ')
}

// Função de apoio para remover espaços sobrando nos cantos e duplicados no meio.
const trimAll = (text: string) => text.trim().replace(/\s+/g, ' ')

console.clear()
console.log(capitalize(trimAll(prompt('Informe seu nome!')!)))
