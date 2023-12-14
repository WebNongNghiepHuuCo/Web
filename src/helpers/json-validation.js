export const isJSON = (str) => {
  try {
    var obj = JSON.parse(str)
    if (obj && typeof obj === 'object' && obj !== null) {
      return true
    }
  } catch (err) {
    return false
  }
}
