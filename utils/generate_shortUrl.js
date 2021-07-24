function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateShortUrl(amount) {
  // define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = "1234567890"
  const collection = lowerCaseLetters + upperCaseLetters + numbers

  let short = ""
  for (let i = 0; i < amount; i++) {
    short += sample(collection)
  }

  return short
}

module.exports = generateShortUrl