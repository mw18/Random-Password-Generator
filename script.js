// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "#", "$", "%", "&","(", ")", "*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?","@","^", "_", "`", "{", "|", "}", "~"]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generate password
function generatePassword (){
  var randomPassword = "";

// prompt user
var length = parseInt(prompt("How many characters would you like your password to contain?"))
if(length < 8 || length > 128) {
  alert("Length must be 8-128 characters");
  return;
}

// Creates a confirm box which takes in true or false.
var hasUppers = confirm ("Click OK to confirm using uppercase characters"); 
var hasNumeric = confirm ("Click OK to confirm using numeric characters"); 
var hasSpecial = confirm ("Click OK to confirm including special characters");
var hasLowers = confirm ("Click OK to confirm using lowercase characters");

while (!(hasUppers || hasNumeric || hasSpecial || hasLowers)) {
  alert("You must select at least one character type!");
}
  var passwordCharacters = [];

if (hasUppers){
  passwordCharacters = passwordCharacters.concat(upperLetters);
}

if (hasNumeric) {
  passwordCharacters.concat(numbers);
  }

if (hasSpecial) {
  passwordCharacters.concat(special);
}

if (hasLowers) {
  passwordCharacters.concat(lowerLetters);
}  


for(var i = 0; i < length; i++) {
  var rand = Math.floor(Math.random() * passwordCharacters.length)
  randomPassword = randomPassword + passwordCharacters[rand]
  }
  
//Return random password
return randomPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 