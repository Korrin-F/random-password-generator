// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];


// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


//* Generate a password when the button is clicked

  //* Code should validate for each input and at least one character type should be selected
  //* Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// specialCharacters
// numericCharacters
// upperCasedCharacters
// lowerCasedCharacters
  
// Function to prompt user for password options
function getPasswordOptions() {

  var length = 0;

  while (isNaN(length) || length < 8 || length > 128){
    length = Number(prompt("Pick a password length between 8 - 128"));

    if (isNaN(length)){
      alert("Please enter a number only.");
    }
  }
  
//* Character types (confirm)
  var lowercase = false;
  var uppercase = false;
  var numerical = false;
  var special = false;
// if no setting have been selected then prompt the user for more their entry.
  while (lowercase===false && uppercase===false && numerical===false && special===false){
    alert("Please choose which settings you would like in your password.")
    var lowercase = confirm("Would you like to include Lowercase Characters?");
    var uppercase = confirm("Would you like to include Uppercase Characters?");
    var numerical = confirm("Would you like to include Numbers?");
    var special = confirm("Would you like to include Special Characters?");
  }
  
  return {

      lengthOption: length, 
      
      lowercaseOption: lowercase,
      lowercaseArray: lowerCasedCharacters,
      
      uppercaseOption: uppercase,
      uppercaseArray: upperCasedCharacters,
      
      numericalOption: numerical,
      numericalArray: numericCharacters,
    
      specialOption: special,
      specialArray: specialCharacters
      }
  

}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * (arr.length -1));
  return arr[index]
}

// Function to generate password with user input
function generatePassword() {
  // [length, lowercase, uppercase, numerical, special]
 var passwordSettings = getPasswordOptions();
 var password = "";
 while (password.length <= passwordSettings[0]){
   if ()
 }

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