// Assignment code here
var generateBtn = document.getElementById("generate");

function generatePassword() {

var specialCharacters = "!@%#&*+=^";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var passwordLength = 8

var hasSpecChars = confirm("Do you want to include specialCharacters?")
var hasLwercaseLetters = confirm("Do you want to include lowerCaseNumbers?")
var hasUppercaseLetters = confirm("Do you want to include upperCaseLetters?")
var hasNumericCharacters = confirm("Do you want to include numericCharacters?")

if (passwordLength < 8 || passwordLength > 128) {
  Window.alert("password length must be at least 8 and no greater than 128 characters")
  return
}

if(isNotANumericCharacter(passwordLength)) {
  window.alert("That's not a number")
  return
}

if (isNotANumericCahracter(passwordLength)) {
window.alert("That's not a number")
} else if (passwordLength < 8|| passwordLength > 128) {
  window.alert("invalid passord length")
} else {
  return
}

  var password = generatePassword();

  var optionsCart = []

for (var i=0; i< lowerCaseLetters.length; i++) 
    uppercaseLetters[i] = lowercaseLetters[i].touppercaseLetters() 
    Math.floor(Math.random() * characters.length);
  }

  
//write password to the #password input
function writePassword() {
  var password=generatePassword();
  var passwordTxt = document.getElementById("password");

  passwordTxt.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);