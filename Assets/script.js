// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Creating origial object with all possible values
var possibleValues = {
  lowerCaseArray: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upperCaseArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numberArray: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  specialArray: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
};

//Get Arrays prepped for pool of values
var passwordValuePool = {};

//Checking to ensure numbers are in the required length and also that its a number
var generatePassword = function () {
  var passwordLength = prompt("Please Select A Number Between 8 and 128");
  //Creates a loop to continue to prompt user until password length is acceptable
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) === true) {
    passwordLength = Number(prompt("Please Select A Number Between 8 and 128"));
  }
  //Runs the Check Values Function While passing local variable of passwordLength
  checkValues(passwordLength);
};

//Start adding key:value pairs to pool with checks
var checkValues = function (passwordLength) {
  var lowerArrayCheck = confirm("Do you want to include lower case letters?");
  if (lowerArrayCheck === true) {
    passwordValuePool.lower = possibleValues.lowerCaseArray;
  }
  var upperArrayCheck = confirm("Do you want to include upper case letters?");
  if (upperArrayCheck == true) {
    passwordValuePool.upper = possibleValues.upperCaseArray;
  }
  var numberArrayCheck = confirm("Do you want to include numbers?");
  if (numberArrayCheck == true) {
    passwordValuePool.number = possibleValues.numberArray;
  }
  var specialArrayCheck = confirm("Do you want to include special characters?");
  if (specialArrayCheck == true) {
    passwordValuePool.special = possibleValues.specialArray;
  }
  //Calls Character check while continuing to pass local variable
  characterCheck(passwordLength);
};

//Checking if characters were selected
var characterCheck = function (passwordLength) {
  if (Object.values(passwordValuePool).length == 0) {
    alert("You must choose a character type, please try again by clicking the button");
  }

  //Ensures that new object has values; meaning some character type has been selected
  if (Object.values(passwordValuePool).length !== 0) {
    //Continues passing local variable and calls createPassword
    createPassword(passwordLength);
  }
};

// Actually start creating the password by looping through the object
var passwordCreated = "";
var createPassword = function (passwordLength) {
  while (passwordCreated.length < passwordLength) {
    var keyIndex = Math.floor(Math.random() * Object.values(passwordValuePool).length);
    var keyValue = Object.values(passwordValuePool)[keyIndex];
    var valueIndex = Math.floor(Math.random() * keyValue.length);
    var indexPassword = keyValue[valueIndex];
    passwordCreated += indexPassword;
  }

  //Display text to website
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordCreated;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
