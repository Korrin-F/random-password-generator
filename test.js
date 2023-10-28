
var password = "pL3!fW3[xC4-a" //13 characters
//----------------------------------------------
// Shuffles the final password for extra randomness 
//----------------------------------------------
function shufflePassword(password){
    let passwordArray = password.split("");
    console.log("First new password: " + passwordArray);

    for (var i = 0; i < password.length; i++){
        console.log("Iteration: " + i);
        //swap a character at the current index with another character at a random index
        // grab first character
        let charOne = passwordArray[i];
        console.log("charOne: " + charOne);
        // get a random index 
        let ranIndex = Math.floor(Math.random()*(password.length-1));
        console.log("ranIndex: " + ranIndex);

        //check if the two indexs are the same if so generate a new index
        while(i === ranIndex){
            ranIndex = Math.floor(Math.random()*(password.length-1));
        }

        //get the second index value
        let charTwo = passwordArray[ranIndex];
        console.log("charTwo: " + charTwo);
        //swap the index values
    
        passwordArray[i] = charTwo;
        passwordArray[ranIndex] = charOne;
        console.log("Original password: "+ password);
        console.log("New password: "+ passwordArray);
        
    }
    return passwordArray.join("")
  }

console.log(shufflePassword(password));