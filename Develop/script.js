// Assignment code here\

//Creates a loop to continue to prompt user until password length is acceptable
var possibleValues = {
  lowerCaseArray: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCaseArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numberArray: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialArray: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
};

//Get Arrays prepped for pool of values
var passwordValuePool = {};
var passwordLength = Number(prompt("Please Select A Number Between 8 and 128"));

//Checking to ensure numbers are in the required length and also that its a number
var generatePassword = function () {
  // var passwordLength = Number(prompt("Please Select A Number Between 8 and 128"));
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    // passwordLength = Number(prompt("Please Select A Number Between 8 and 128"));
    return passwordLength;
  }
  checkValues();
};

//Start adding key:value pairs to pool with checks
var checkValues = function () {
  var lowerArrayCheck = prompt("Do you want to include lower case letters? \n Type Y or N").toLowerCase();
  if (lowerArrayCheck == "y") {
    passwordValuePool.lower = possibleValues.lowerCaseArray;
  }
  var upperArrayCheck = prompt("Do you want to include upper case letters? \n Type Y or N").toLowerCase();
  if (upperArrayCheck == "y") {
    passwordValuePool.upper = possibleValues.upperCaseArray;
  }
  var numberArrayCheck = prompt("Do you want to include numbers? \n Type Y or N").toLowerCase();
  if (numberArrayCheck == "y") {
    passwordValuePool.number = possibleValues.numberArray;
  }
  var specialArrayCheck = prompt("Do you want to include special characters? \n Type Y or N").toLowerCase();
  if (specialArrayCheck == "y") {
    passwordValuePool.special = possibleValues.specialArray;
  }
  //Checking if characters were selected
  if (Object.values(passwordValuePool).length == 0) {
    alert("You must choose a character type, please try again by clicking the button");
  }
  //Pulling random valuoe from object
  if (Object.values(passwordValuePool).length !== 0) {
    var randomObectValue = function () {
      var keyIndex = Math.floor(Math.random() * Object.values(passwordValuePool).length);
      var keyValue = Object.values(passwordValuePool)[keyIndex];
      var valueIndex = Math.floor(Math.random() * keyValue.length);
      var indexPassword = keyValue[valueIndex];
      console.log(indexPassword);
    };
    // Actually start creating the password by looping through the object
    var passwordCreated = "";

    while (passwordCreated.length < passwordLength) {
      randomObectValue();
      passwordCreated += indexPassword;
      console.log(passwordCreated);
    }
  }
};

//return on generatePassword()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// PSUEDO FOR ASSIGNMENT//

// 1-Write Code that Promps user on button click Done
// 2-prompt for length of password between 8-128 Done
// 3- Validate that 8-128 was entered, otherwise reject and start Over Done
// 4-prompts with a series of Y or No to include the different types; and confirm Done
// 5-check that at least one character type has been selected Done
// 6- cycle through different arrays until target pasword length is met
// 7- display output on screen

// Challenge for Assignment
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
//  THEN the password is either displayed in an alert or written to the page
