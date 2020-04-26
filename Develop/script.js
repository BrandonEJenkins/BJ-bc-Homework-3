// Assignment Code
//var generateBtn = document.querySelector("#generate");


// do while loop; length must be a number greater than 8 less than 128
do {
  var passLength = parseInt(window.prompt('Please enter the password length (must be a NUMBER from 8 to 128)',''), 10);
} while ((isNaN(passLength) || passLength > 128 || passLength < 8) || (isNaN(passLength) || typeof passLength !== "number"));

do {
var confirmUppers = confirm('Include uppercase letters?');
var confirmLowers = confirm('Include lowercase letters?');
var confirmNumbers = confirm('Include numbers?');
var confirmSymbols = confirm('Include special characters?');

} while (confirmUppers === false && confirmLowers === false && confirmNumbers === false && confirmSymbols === false) {
  alert('Must choose at least 1 character type');
}


// DOM elements
const passwordEl = document.getElementById('password');

// Store functions in one object
const randomPass = {
  upper: genRandomUpper,
  lower: genRandomLower,
  number: genRandomNumber,
  symbol: genRandomSymbol
};

// Functions to generate random characters - Reference: codepen.io - Reference: net.comber.com/charset
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





// Write password to the #password input
/*
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/