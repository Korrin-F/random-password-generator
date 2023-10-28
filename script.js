// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  
// Function to prompt user for password options
function getPasswordOptions() {

  var length = 0;
  // ask for a password length until a correct answer has been recieved 
  while (isNaN(length) || length < 8 || length > 128){
    length = Number(prompt("Pick a password length between 8 - 128"));
    // console.log(length); // if the user selects cancel then the result is 0
    // handle error
    if (isNaN(length)){
      alert("Please enter a number only.");
    }
  }
  
//* Character types (confirm)
  var lowercase = false;
  var uppercase = false;
  var numerical = false;
  var special = false;
// if no setting have been selected then prompt the user for them to accept at least one entry.
  while (lowercase===false && uppercase===false && numerical===false && special===false){
    alert("Please choose which settings you would like in your password.")
    lowercase = confirm("Would you like to include Lowercase Characters?");
    uppercase = confirm("Would you like to include Uppercase Characters?");
    numerical = confirm("Would you like to include Numbers?");
    special = confirm("Would you like to include Special Characters?");
  }
  //--------------------prev--------------------//
  // var allSettings = [
  //     {
  //       lengthOption: length, 
  //     },
  //     {
  //       optionBool: lowercase,
  //       arrayChar: lowerCasedCharacters
  //     },
  //     {
  //       optionBool: uppercase,
  //       arrayChar: upperCasedCharacters
  //     },
  //     {
  //       optionBool: numerical,
  //       arrayChar: numericCharacters
  //     },
  //     {
  //       optionBool: special,
  //       arrayChar: specialCharacters
  //     }
  // ]
  //-----------------------------------------------//

  var settings = [
    {
      optionBool: lowercase,
      arrayChar: lowerCasedCharacters
    },
    {
      optionBool: uppercase,
      arrayChar: upperCasedCharacters
    },
    {
      optionBool: numerical,
      arrayChar: numericCharacters
    },
    {
      optionBool: special,
      arrayChar: specialCharacters
    }
  ]

  var arrays = settings.filter(function(setting) {
      return setting.optionBool === true;  //filters and returns the objects that have been chosen for the password
    }).map(function(setting) {
      return setting.arrayChar; //extracts the arrays of characters from the objects that have been chosen for the password.
    });

  arrays.push(length);

  return arrays

}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * (arr.length -1));
  return arr[index]
}

// Function to generate password with user input
function generatePassword() {

   let allSettings = getPasswordOptions();
   let chosenLength = allSettings.pop();
   let chosenArrays = allSettings;

//--------------prev--------------------//
//  var passwordSettings = getPasswordOptions();
//  var chosenLength = passwordSettings[0].lengthOption;

//  passwordSettings.shift(); //remove length property from array now that its saved to length variable

//   // creates an array that contains the character arrays chosen to use in the password.
//  var arrays = passwordSettings.filter(function(setting) {
//     return setting.optionBool === true;  //filters and returns the objects that have been chosen for the password
//   }).map(function(setting) {
//     return setting.arrayChar; //extracts the arrays of characters from the objects that have been chosen for the password.
//   });
//----------------------------------------//


  // generate the random characters for the password to the length of password chosen
  var password = "";
  var i = -1;
  while (password.length < chosenLength){
    i = 0 // start from the first index in arrays, when every array has been accessed then restart from 0
    while(i < chosenArrays.length){ // get a random character from the next array in the arrays until one character has been recieved out of each array or the password has reached its total length
      password = password + getRandom(chosenArrays[i]) // add the character to the password
      console.log("updated password")
      i++
    }
  }

  return password
}




//---------------------------------------------//
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