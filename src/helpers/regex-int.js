import { REGEX } from './regex'

export const onRegexIntegerNumber = (e) => {
  const specialCharRegex = new RegExp(REGEX.INT_NUMBER)
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode)
  if (!specialCharRegex.test(pressedKey)) {
    e.preventDefault()
    return false
  }
}
