// Assignment code here
//create variables that hold specialCharacters, lowerCaseLetters, upperCaseLetters, numericCharacters

var specialCharacters = "!@%#&"*+=^";
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericCharacters = "0123456789";

var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incnumericCharacters  = document.getElementById("numbers");
var incspecialCharacters= document.getElementById("symbols");
var generateBtn = document.getElementById("generate");

if(length < 8) {
 then alert 
}

if(length >128) {
  then alert that is too long
}


var hasSpecChars = confirm
var hasLwerCaseletters = confirm
var hasupperCaseLetters = confirm
var hasNumericCharacters = confirm

//variable to store user input
var passwordUserResult = {
  length : length,
  hasSpecChar: hasSpecChars,

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});
