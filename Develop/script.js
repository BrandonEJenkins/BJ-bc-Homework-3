
//DOM getElement
const passwordEl = document.getElementById('password');
const uppercaseEl = document.getElementById('includeUppercase');
const lowercaseEl = document.getElementById('includeLowercase');
const numbersEl = document.getElementById('includeNumbers');
const symbolsEl = document.getElementById('includeSymbols');


// Store functions in one object
const groupFunc = {
  upper: genRandomUpper,
  lower: genRandomLower,
  number: genRandomNumber,
  symbol: genRandomSymbol
};


//Functions to generate random characters - Reference: codepen.io - Reference: net.comber.com/charset
function genRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function genRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function genRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function genRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}





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
// var generateBtn = document.querySelector("#generate");




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