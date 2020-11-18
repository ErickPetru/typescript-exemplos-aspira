interface PikadayConstructor {
  new(config: any): any
}

declare var Pikaday: PikadayConstructor

declare global {
  interface Window {
    Pikaday: PikadayConstructor
  }
}

export const createDatePicker = (target: string | HTMLInputElement) => {
  const field = typeof target === 'string' ? document.querySelector<HTMLInputElement>(target) : target
  if (!field) return undefined

  field.type = 'text'
  field.autocomplete = 'off'

  const picker = new Pikaday({
    field,
    format: 'DD/MM/YYYY',
    showDaysInNextAndPreviousMonths: true,
    toString(date: Date, format: string) {
      const day = `${date.getDate()}`
      const month = `${date.getMonth() + 1}`
      const year = `${date.getFullYear()}`

      return format
        .replace('DD', day.padStart(2, '0'))
        .replace('D', day)
        .replace('MM', month.padStart(2, '0'))
        .replace('M', month)
        .replace('YYYY', year)
        .replace('YY', year.substr(-2))
    },
    parse(dateString: string) {
      const parts = dateString.split('/')
      const day = parseInt(parts[0], 10)
      const month = parseInt(parts[1], 10) - 1
      const year = parseInt(parts[2], 10)
      return new Date(year, month, day)
    },
    i18n: {
      previousMonth: 'Anterior',
      nextMonth: 'Próximo',
      months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      weekdays: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
      ],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    }
  })

  picker.focus = () => field.focus()

  Object.defineProperty(picker, 'value', {
    get: () => picker.toString('YYYY-MM-DD'),
    set: (value) => (value ? picker.setDate(value) : picker.clear())
  })

  Object.defineProperty(picker, 'className', {
    get: () => field.className,
    set: (value) => field.className = value
  })

  return picker as HTMLInputElement
}

export default createDatePicker
