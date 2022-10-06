// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
if (max) {
max = min
min = 0
}
var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
return list[randomInt(0, list.length - 1)]
}

function generatePassword() {

var userInput = window.prompt("How long do you want your password to be?")

var passwordLength = parseInt(userinput)
 

if(isNaN(passwordLength)) {
  window.alert("That's not a number!")
  return
  }

if(passwordLength < 8 || passwordLength > 128) {
window.alert("The length of password must be between 8 and 128 characters")
return
}

var SpecialCharacters = window.confirm("Do you want to include specialCharacters?")
var hasLwercaseLetters = window.confirm("Do you want to include lowerCaseNumbers?")
var hasUppercaseLetters = window.confirm("Do you want to include upperCaseLetters?")
var hasNumericCharacters = window.confirm("Do you want to include numericCharacters?")

var specialCharacters = ["!","@","%","#","&","*","+"]
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"]
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]

var options = []

for (var i = 0; i< lowercaseLetters.length; i++) {
  uppercaseLetters[i] = lowercaseLetters[i].toUpperCase() 
}
  
if(numericCharacters === true) 
  options.push(numericCharacters)
  }

if(specialCharacters === true) {
  options.push(specialCharacters)
  }

if(lowercaseLetters === true) {
  options.push(lowercaseLetters)
  }

if(uppercaseLetters === true) {
  options.push(uppercaseLetters)
  }

  var generatePassword = ""

  for (var i = 0; i < password.Length; i++) {
  var randomItem = options[randomInt(0, options.length - 1)]
  }

//Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  