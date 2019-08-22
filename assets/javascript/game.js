
// Create a word array for game vocabulary

var words = ["monkey", "jaguar", "anaconda", "frog", "pirahna", "ant", "elephant", "tiger", 
"leopard", "python", "crocodile", "fox", "cobra", "parrot", "eagle"]

console.log(words)

//Choose word

var chooseWord = words[Math.floor(Math.random()*words.length)]

console.log(chooseWord)
//Display blanks to user "_"
var answerArray = []
    for (var i = 0; i < words.length; i++){
        answerArray[i] = "_"
    }

console.log(answerArray)
//Keypress function for letter input

document.getElementById("demo").addEventListener("keypress",myFunction)
function myFunction ("demo")


//Update guess - submit letter value 

    //Blank or non letter input - loop break

    //More than one letter - alert user "One letter"

    //One letter guess correct 

        // Update correctLetters using documentgetelementbyid
    
    //One letter guess incorrect

        // Update lettersGuessed using documentgetelementbyid

// When letter values match word chosen

        // Update numberOfWins +1

        //Chose another word from the array

//When user makes five incorrect guesses 

        //Update numberofLosses +1

        //Chose another word from array