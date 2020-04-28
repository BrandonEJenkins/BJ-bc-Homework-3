
// DOM elements
const characterLengthRange = document.getElementById('characterAmountRange');
const characterLengthNumber = document.getElementById('characterAmountNumber');

const includeUppercaseEl = document.getElementById('includeUppercase');
const includeNumbersEl = document.getElementById('includeNumbers');
const includeSymbolsEl = document.getElementById('includeSymbols');

const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');

// Generate arrays using browser character sets to define password criteria
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
  arrayFromLowtoHigh(58, 64)
).concat(
  arrayFromLowtoHigh(91, 96)
).concat(
  arrayFromLowtoHigh(123, 126)
)

// Set up event listeners and sync slider to number input form
characterLengthNumber.addEventListener('input', syncCharacterAmount)
characterLengthRange.addEventListener('input', syncCharacterAmount)


// Set up submit event listener to call variables if checkboxes are checked
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterLength = characterLengthNumber.value
  const hasUppercase = includeUppercaseEl.checked
  const hasNumbers = includeNumbersEl.checked
  const hasSymbols = includeSymbolsEl.checked
  const password = generatePassword(characterLength, hasUppercase, hasNumbers, hasSymbols)
  passwordDisplay.innerText = password
})

// Create function to generate random characters and concatenate into string using for loop until password equals total password length
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterLengthNumber.value = value
  characterLengthRange.value = value
}