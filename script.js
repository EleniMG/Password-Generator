// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options
function getPasswordLength() {
  var passwordLength = prompt("How long do you want your password to be? Select a number between 8 and 128")

  // Create a function/conditional if statement to test the user's input for passwordLength before going on to the other questions.
    // Need to turn the passwordLength value from a string to a number

  if (passwordLength >= 8 && passwordLength <= 128){
    // characterCheck();
    var passwordLengthNum = parseInt(passwordLength)
    return passwordLengthNum;
  
  } else {
    alert("Please select a number between 8 and 128")
    getPasswordLength()
  }
}

// Function to check which types of characters the user wants to include, and return those values.
function characterCheck(passwordLengthNum){

    var numericCharCheck = confirm("Would you like to include numbers?");
    var lowerCaseCheck = confirm("Would you like to include lowercase letters?");
    var upperCaseCheck = confirm("Would you like to include uppercase letters?");
    var specialCharCheck = confirm("Would you like to include special characters? E.g. *, !, &, %, $, £");

  // Create a function/conditional if statement to check one type of character has been selected.

  if(numericCharCheck === false && lowerCaseCheck === false && upperCaseCheck === false && specialCharCheck === false){
    alert("Please select a character type");
    characterCheck()
  }

  // Save data into an object

  var userSelections = {
    numericCharCheck: numericCharCheck,
    lowerCaseCheck: lowerCaseCheck,
    upperCaseCheck: upperCaseCheck,
    specialCharCheck: specialCharCheck
  }


  var possibleCharacters = compileCharList(userSelections);
  var shortlistedCharacters = getRandom(possibleCharacters, passwordLengthNum);

  return shortlistedCharacters;
}


  // Create new array to store the characters that will go into the password
  // Create new array which contains the characters that could be selected for the password
  // Based on the number and character selections, the new array will need to include the randomly selected characters


function compileCharList(userSelections) {

  var possibleCharacters = [];

  if (userSelections.numericCharCheck){
    possibleCharacters.push(numericCharacters);
  }

  if (userSelections.specialCharCheck){
    possibleCharacters.push(specialCharacters);
  }

  if (userSelections.lowerCaseCheck){
    possibleCharacters.push(lowerCasedCharacters);
  }

  if (userSelections.upperCaseCheck){
    possibleCharacters.push(upperCasedCharacters)
  }

   return possibleCharacters;

}


// // Function for getting a random element from an array

function getRandom(arr, passwordLengthNum) {

  var shortlistedCharacters = [];

  for (var i = 1; i <= passwordLengthNum; i++){
    var firstIndex = Math.floor(Math.random() * (arr.length));
    var secondIndex = Math.floor(Math.random() * arr[firstIndex].length);
  
    shortlistedCharacters.push(arr[firstIndex][secondIndex])
  }

  
  return shortlistedCharacters;

}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = getPasswordLength();
  return characterCheck(passwordLength).join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.