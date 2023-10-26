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
function getPasswordOptions() {
  var passwordLength = prompt("How long do you want your password to be? Select a number between 8 and 128")

  // Create a function/conditional if statement to test the user's input for passwordLength before going on to the other questions.

  if (passwordLength >= 8 && passwordLength <= 128){
    var numericCharCheck = confirm("Would you like to include numbers?");
    var lowerCaseCheck = confirm("Would you like to include lowercase letters?");
    var upperCaseCheck = confirm("Would you like to include uppercase letters?");
    var specialCharCheck = confirm("Would you like to include special characters? E.g. *, !, &, %, $, £");
  
  } else {
    alert("Please select a number between 8 and 128")
    getPasswordOptions()
  }

  // console.log(passwordLength, numericCharCheck, lowerCaseCheck, upperCaseCheck, specialCharCheck)

  // Create a function/conditional if statement to check one type of character has been selected.

  if(numericCharCheck === false && lowerCaseCheck === false && upperCaseCheck === false && specialCharCheck === false){
    alert("Please select a character type");
    getPasswordOptions()
  }

  // Save data into an object

  return {
    passwordLength: passwordLength,
    numericCharCheck: numericCharCheck,
    lowerCaseCheck: lowerCaseCheck,
    upperCaseCheck: upperCaseCheck,
    specialCharCheck: specialCharCheck
  }
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var userSelections = getPasswordOptions();
  console.log(userSelections)
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.