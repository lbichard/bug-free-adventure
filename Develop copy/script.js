// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var cLower;
var cUpper;
var cNum;
var cSpe;
var userChoices;
var passwordBlank = [];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  passwordLength = prompt("How many characters would you like to include into your password? (8-128)");
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Your password must be between 8 and 128 characters.");

  } else {
    cUpper = confirm("Do you want to include upper case letters?");
    cLower = confirm("Do you want to include lower case letters?");
    cNum = confirm("Do you want to include numbers?");
    cSpe = confirm("Do you want to include special characters?");
  }


  
    if (cUpper && cLower && cSpe && cNum) {
    userChoices = upperCase.concat(lowerCase, numbers, special);
  }
  else if (cUpper && cLower && cSpe) {
    userChoices = upperCase.concat(lowerCaseCase, special);
  }
  else if (cUpper && cLower && cNum) {
    userChoices = upperCase.concat(lowerCase, numbers);
  }
  else if (cUpper && cNum && cSpe) {
    userChoices = upperCase.concat(numbers, special);
  }
  else if (cLower && cNum && cSpe) {
    userChoices = lowerCase.concat(numbers, special);
  }
  else if (cLower && cUpper) {
    userChoices = lowerCase.concat(upperCase);
  }
  else if (cUpper && cNum) {
    userChoices = upperCase.concat(numbers);
  }
  else if (cUpper && cSpe) {
    userChoices = upperCase.concat(special);
  }
  else if (cLower && cNum) {
    userChoices = lowerCase.concat(numbers);
  }
  else if (cLower && cSpe) {
    userChoices = lowerCase.concat(special);
  }
  else if (cSpe && cNum) {
    userChoices = special.concat(numbers);
  }
  else if (cUpper) {
    userChoices = upperCase;
  }
  else if (cLower) {
    userChoices = lowerCase;
  }
  else if (cSpe) {
    userChoices = special;
  }
  else if (cNum) {
    userChoices = numbers;
  };
  for (var i = 0; i < passwordLength; i++) {
    var allResponses = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allResponses);
  }
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}