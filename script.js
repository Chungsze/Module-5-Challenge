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
  //variable to store length of password of user input
  let length = parseInt(prompt("How many characters do you wantyour password to contain?"));

   //alert(length);
   //check the value is not a number will alert message 
   if(isNaN(length)===true){
       alert(`Password length must be provided as a number.`);
       return;
   }
   if(length < 10){
      alert("Password length must be at least 10 characters");
      return;
   }

   if(length>64){
    alert("Password length must be less than 65 characters");
    return;}

    let hasSpecialChar = confirm("Please click ok to confirm include special character");
  


// Function for getting a random element from an array
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random()* arr.length);
    let randomValue = arr[randomIndex];
    return randomValue;
}

// Function to generate password with user input
function generatePassword() {
  let option = getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);