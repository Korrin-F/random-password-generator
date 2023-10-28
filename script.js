// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


 //---------------------------------------------- 
// Function to prompt user for password options
//----------------------------------------------

function getPasswordOptions() {

  //--- GET DESIRED LENGTH ---
  let length = 0;
  // ask for a password length until a correct answer has been recieved 
  while (isNaN(length) || length < 8 || length > 128){
    length = Number(prompt("Pick a password length between 8 - 128"));
    // console.log(length); // if the user selects cancel then the result is 0
    // handle error
    if (isNaN(length)){
      alert("Please enter a number only.");
    }
  }
  
  
  //----- GET DESIRED CHARACTER TYPES ----
  let lowercase = false;
  let uppercase = false;
  let numerical = false;
  let special = false;
  // if no setting have been selected then prompt the user for them to accept at least one entry.
  while (lowercase===false && uppercase===false && numerical===false && special===false){
    alert("Please choose which settings you would like in your password.")
    lowercase = confirm("Would you like to include Lowercase Characters?");
    uppercase = confirm("Would you like to include Uppercase Characters?");
    numerical = confirm("Would you like to include Numbers?");
    special = confirm("Would you like to include Special Characters?");
  }
  // ------ SAVE CHARACTER BOOLEAN SETTINGS AND CHARACTER ARRAYS ---------
  let settings = [
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

  //------ SAVE ONLY DESIRED CHARACTER ARRAYS TO A NEW ARRAY
  let arrays = settings.filter(function(setting) {
      return setting.optionBool === true;  //filters and returns the objects that have been chosen for the password
    }).map(function(setting) {
      return setting.arrayChar; //extracts the arrays of characters from the objects that have been chosen for the password.
    });
  
  //------ ADD LENGTH TO END OF ARRAY ------
  arrays.push(length);

  return arrays
}

//----------------------------------------------
// Function for getting a random element from an array
//----------------------------------------------

function getRandom(arr) {
  let index = Math.floor(Math.random() * (arr.length -1));
  return arr[index]
}

//----------------------------------------------
// Shuffles the final password for extra randomness 
//----------------------------------------------
function shufflePassword(password){

  //turn the string into an array
  let passwordArray = password.split("");

  //----- LOOP THROUGH PASSWORD & CHANGE EVERY VALUE ------
  for (var i = 0; i < password.length; i++){
      
      // Char at current index
      let charOne = passwordArray[i];
      // get a random index to swap with
      let ranIndex = Math.floor(Math.random()*(password.length-1));

      //check if the two indexs are the same if so generate a new index
      while(i === ranIndex){
          ranIndex = Math.floor(Math.random()*(password.length-1));
      }
      //get the value at the random index
      let charTwo = passwordArray[ranIndex];

      //swap the index values
      passwordArray[i] = charTwo;
      passwordArray[ranIndex] = charOne;
      
  }
  // return the password array to a string
  let newPassword = passwordArray.join("");

  return newPassword
}


//----------------------------------------------
// Function to generate password with user input
//----------------------------------------------

function generatePassword() {
  //---- EXTRACT THE SETTINGS INTO DIFFERENT VARIABLES ---
  let allSettings = getPasswordOptions();
  let chosenLength = allSettings.pop();
  let chosenArrays = allSettings;

  //---- GENERATE PASSWORD ----
  let password = "";
  let i = 0; //index controller 

  // start from the first index in arrays, when every array has been accessed then restart from 0
  // get a random character from the next array in the arrays until one character has been recieved out of each array or the password has reached its total length
  while(password.length < chosenLength ){ 
    password = password + getRandom(chosenArrays[i]) // add the random character to the password
    //control index number ensures it does not go beyond the arrays total length.
    if (i >= chosenArrays.length -1){
      i = 0 //start index back at 0
    }else{
      i++ //move to the next index
    }
  }
  
  return shufflePassword(password)
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