import { parsePhoneNumberFromString } from 'libphonenumber-js'

export function normalizePhone(input: string) {
  const raw = input.replace(/[^\d]/g, '')
  const guess = raw.startsWith('55') ? raw : `55${raw}`
  const pn = parsePhoneNumberFromString(`+${guess}`)
  if (!pn || !pn.isValid()) throw new Error('Telefone inválido')
  return pn.number.replace('+', '') // E.164 sem '+'
}
