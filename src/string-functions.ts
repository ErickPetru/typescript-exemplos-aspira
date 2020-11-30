export const trimAll = (text: string) => text.trim().replace(/\s+/g, ' ')

export const capitalize = (text: string) => {
  const words = text.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substr(0, 1).toUpperCase() +
      words[i].substr(1).toLowerCase()
  }

  return words.join(' ')
}

export const slugify = (text: string) => text
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-')
  .replace(/[áàã]/g, 'a')
  .replace(/[éê]/g, 'e')
  .replace(/[í]/g, 'i')
  .replace(/[óõ]/g, 'o')
  .replace(/[úü]/g, 'u')
  .replace(/[ç]/g, 'c')
