
//DOM getElement
const passwordLengthRange = document.getElementById('passwordLengthRange');
const passwordLengthNumber = document.getElementById('passwordLengthNumber');

const includeUppercaseEl = document.getElementById('includeUppercase');
const includeLowercaseEl = document.getElementById('includeLowercase');
const includeNumbersEl = document.getElementById('includeNumbers');
const includeSymbolsEl = document.getElementById('includeSymbols');

const form = document.getElementById('passwordGeneratorForm')

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

// const generateEl = document.getElementById('generate');
// const passwordEl = document.getElementById('password');

// Set up event listeners
passwordLengthNumber.addEventListener('input', syncPasswordAmount)
passwordLengthRange.addEventListener('input', syncPasswordAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const passwordLength = passwordLengthNumber.value
  const uppercaseEl = includeUppercaseEl.checked
  const lowercaseEl = includeLowercaseEl.checked
  const numbersEl = includeNumbersEl.checked
  const symbolsEl = includeSymbolsEl.checked

  const finalPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
})

function boxesChecked () {
  if ( includeLowercase.checked || includeUppercase.checked || includeNumbers.checked || includeSymbols.checked ) {
    document.querySelector(":disabled").disabled = false;
  }
}

function generatePassword(passwordLength, uppercaseEl, lowercaseEl, numbersEl, symbolsEl) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (uppercaseEl) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (symbolsEl)charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  //String.fromCharCode(65)

  const passwordCharacters = []
  for (let i = 0; i < passwordLength, i++) {
    const characterCode = charCodes[Math.floor(Math.random() * passwordLength)]
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

function syncPasswordAmount(e) {
  const value = e.target.value
  passwordLengthNumber.value = value
  passwordLengthRange.value = value
}

// Store functions in one object
// const groupFunc = {
//   upper: genRandomUpper,
//   lower: genRandomLower,
//   number: genRandomNumber,
//   symbol: genRandomSymbol
// };


//Functions to generate random characters - Reference: codepen.io - Reference: net.comber.com/charset
// function genRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function genRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function genRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function genRandomSymbol() {
//   const symbols = '!@#$%^&*(){}[]=<>,.';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }





/************************************
* GRAVEYARD

// do while loop; length must be a number greater than 8 less than 128
/*

do {
  var passLength = parseInt(window.prompt('Please enter the password length (must be a NUMBER from 8 to 128)',''), 10);
} while ((isNaN(passLength) || passLength > 128 || passLength < 8) || (isNaN(passLength) || typeof passLength !== "number"));

do {
var confirmUppers = confirm('Include uppercase letters?');
var confirmLowers = confirm('Include lowercase letters?');
var confirmNumbers = confirm('Include numbers?');
var confirmSymbols = confirm('Include special characters?');

  if (confirmUppers === false && confirmLowers === false && confirmNumbers === false && confirmSymbols === false) {
  alert('Must choose at least 1 character type');
  }
} while (confirmUppers === false && confirmLowers === false && confirmNumbers === false && confirmSymbols === false); {
  
  // document.write('Password includes uppercase: ' + confirmUppers),
  // document.write('Password includes lowercase: ' + confirmLowers),
  // document.write('Password includes uppercase: ' + confirmNumbers),
  // document.write('Password includes uppercase: ' + confirmSymbols);
}

*/

// function generate() {
//   var password = '';
//   for (let i = 1; index <= 10; i++) {
//     var c = Math.floor((Math.random() * x.length) + 0);
//     password += x.charAt(c);
//   }
//   console.log(password);
//   document.getElementById('pass').innerHTML = `<h1>Password: ${password}</h1>`;
// }


// function generate() {
//   var password='';
//   for (let i = 1; i < 128 && i > 8; i++) {
//     var c = Math.floor((Math.random() * x.length) + 0);
//     password += x.chartAt(c);
//   }
// }


// DOM elements
// const passwordEl = document.getElementById('password');
// const generateEl = document.getElementById('generate');

// Assignment Code
// 




// Generate password click event
// generateEl.addEventListener('click', () => {
//   const length = 
// })

//Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }