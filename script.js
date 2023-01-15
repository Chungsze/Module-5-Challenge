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
  let length = parseInt(prompt("How many characters do you wantyour password to contain?")
  );
  //check the value is not a number will alert message 
  if(isNaN(length)===true){
    alert(`Password length must be provided as a number.`);
     
    }
    //set min length of password
    if(length < 10){
      alert("Password length must be at least 10 characters");
      return;
   }
   //set maximum length of password
   if(length > 64){
    alert("Password length must be less than 65 characters");
    return;}
   //confirm what kind of character should contain in the password
    let hasSpecialChar = confirm(
      "Please click ok to confirm include special character");
    let hasNumericChar = confirm (
      "Click ok to confirm include numeric character");

    let hasLowerChar = confirm(
      "Please click ok to confirm include lower case character");
    let hasUpperChar = confirm(
      "Please click ok to confirm include upper case character");
    if(hasLowerChar===false&& 
      hasUpperChar===false&&
      hasSpecialChar===false&&
      hasNumericChar===false){
       alert(`Must include either one type of character`);
       return;
      }

      let passwordOptions = {
        length: length,
        hasSpecialChar: hasSpecialChar,
        hasUpperChar: hasUpperChar,
        hasLowerChar: hasLowerChar,
        hasNumericChar: hasNumericChar

      }
      //console.log(passwordOptions);

      return passwordOptions;








}

  
   
  
   


// Function for getting a random element from an array
function getRandom(arr) {
    let randomIndex = Math.floor(Math.random()* arr.length);
    let randomValue = arr[randomIndex];
    return randomValue;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(`options: ${options}`);
  let result = [];

  let possibleCharacters =[];
  let guaranteedCharacters =[];

  if(options.hasSpecialChar){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters))
  }

  if(options.hasLowerChar){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters))
  }

  if(options.hasUpperChar){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters))
  }

  if(options.hasNumericChar){
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters))
  }

  console.log(`This is possiblechar: ${possibleCharacters}`);
  console.log(guaranteedCharacters);

  for(let i = 0; i < options.length; i++){
    var generated = getRandom(possibleCharacters);
    result.push(generated);
  }
  console.log(result);

  return result.join("");


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