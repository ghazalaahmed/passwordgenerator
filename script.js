// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLength = parseInt(userInput)


  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("The length of password must be between 8 and 128 characters")
    return
  }

  var hasSpecialCharacters = window.confirm("Do you want to include specialCharacters?")
  var hasLowercaseLetters = window.confirm("Do you want to include lowerCaseNumbers?")
  var hasUppercaseLetters = window.confirm("Do you want to include upperCaseLetters?")
  var hasNumericCharacters = window.confirm("Do you want to include numericCharacters?")

  var specialCharacters = ["!", "@", "%", "#", "&", "*", "+"]
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  var options = []

  for (var i = 0; i < lowercaseLetters.length; i++) {
    uppercaseLetters[i] = lowercaseLetters[i].toUpperCase()
  }

  if (hasNumericCharacters === true)
    options = options.concat(numericCharacters)


  if (hasSpecialCharacters === true) {
    options = options.concat(specialCharacters)
  }

  if (hasLowercaseLetters === true) {
    options = options.concat(lowercaseLetters)
  }

  if (hasUppercaseLetters === true) {
    options = options.concat(uppercaseLetters)
  }
console.log(options)
  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomItem = getRandomItem(options)
generatePassword = generatePassword +randomItem
  }
  return generatePassword
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
