
// Create a word array for game vocabulary

var words = ["monkey", "jaguar", "anaconda", "frog", "pirahna", "ant", "elephant", "tiger", 
"leopard", "python", "crocodile", "fox", "cobra", "parrot", "eagle"]

console.log(words)

// Creating variable to hold values

var randomWord = ""
var lettersOfWord = []
var blanks = 0
var blanksAndCorrect = []
var wrongGuess

// Variables to hold the counters

var wins = 0
var losses = 0
var guessesRemaining = 9

///

function Game ()    {
    
    // Generate random word from array
    var chooseWord = words[Math.floor(Math.random()*words.length)]
    console.log(chooseWord)


}


//Display blanks to user "_"
var answerArray = []
    for (var i = 0; i < words.length; i++){
        answerArray[i] = "_"
    }

console.log(answerArray)
//Keypress function for letter input

document.getElementById("demo").addEventListener("keypress",myFunction)
function myFunction ("demo")


