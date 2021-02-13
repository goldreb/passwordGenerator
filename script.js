// Assignment Code
var enter;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialChar;
var confirmNumber;

// password criteria
upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

numberSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', ':', ';', '<', '=', '?', '/', '.', '@', '[', ']', '{', '}', '|', '~'];


var choices;

var generateBtn = document.querySelector("#generate");



// criteria for password
function generatePassword() {
  enter = parseInt(prompt("How many characters would like for your password? choose from 8 to 128 characters"));
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Choose between 8 and 128 characters"));
  } else {
    confirmUpperCase = confirm("Will this contain Upper case?");
    confirmLowerCase = confirm("Will this contain lower case?");
    confirmSpecialChar = confirm("Will this contain special characters?");
    confirmNumber = confirm("will this contain number/s?");
  };

  if (!confirmUpperCase && !confirmLowerCase && !confirmSpecialChar && !confirmNumber) {
    choices = alert("Choose a criteria!");

  } else if (confirmSpecialChar && confirmNumber && confirmUpperCase && confirmLowerCase) {
    choices = specialChar.concat(numberSelect, lowerCase, upperCase);

  } else if (confirmSpecialChar && confirmNumber && confirmUpperCase) {
    choices = specialChar.concat(numberSelect, upperCase);

  } else if (confirmSpecialChar && confirmNumber && confirmLowerCase) {
    choices = specialChar.concat(numberSelect, lowerCase);

  } else if (confirmSpecialChar && confirmLowerCase && confirmUpperCase) {
    choices = specialChar.concat(lowerCase, upperCase);

  } else if (confirmNumber && confirmLowerCase && confirmUpperCase) {
    choices = numberSelect.concat(lowerCase, upperCase);

  } else if (confirmSpecialChar && confirmNumber) {
    choices = specialChar.concat(numberSelect);

  } else if (confirmSpecialChar && confirmLowerCase) {
    choices = specialChar.concat(lowerCase);

  } else if (confirmSpecialChar && confirmUpperCase) {
    choices = specialChar.concat(upperCase);

  } else if (confirmLowerCase && confirmNumber) {
    choices = lowerCase.concat(numberSelect);

  } else if (confirmLowerCase && confirmUpperCase) {
    choices = lowerCase.concat(upperCase);

  } else if (confirmNumber && confirmUpperCase) {
    choices = numberSelect.concat(upperCase);

  } else if (confirmSpecialChar) {
    choices = specialChar;

  } else if (confirmNumber) {
    choices = numberSelect;

  } else if (confirmLowerCase) {
    choices = lowerCase;

  } else if (confirmUpperCase) {
    choices = upperCase;
  }

  var password = [];

  // random selection

  for (var i = 0; i < enter; i++) {
    var getChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(getChoices);

  }
  var ps = password.join("");

  return ps;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

