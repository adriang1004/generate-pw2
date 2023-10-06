// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
// var numericChars = "0123456789";
// var specialChars = "!@#$%^&*()-_=+,.<>/?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// created separate functions to gather user selections 

function generatePassword() {
  console.log("generatepassword");
  var passwordLength = getPasswordLength();
  var characterTypes = getCharacterTypes();
  var allChars = "";
  
  if (characterTypes.includeLowercase) {
    allChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (characterTypes.includeUppercase) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (characterTypes.includeNumeric) {
    allChars += "0123456789";
  }
  if (characterTypes.includeSpecial) {
    allChars += "!@#$%^&*()-_=+,.<>/?";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

function getPasswordLength() {
    var passwordLength;
    do {
      passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
    } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  
    return passwordLength;
  }

function getCharacterTypes() {
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Ensures at least one type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return getCharacterTypes(); 
  }

  return {
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// getPasswordLength();
// getCharacterTypes();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
