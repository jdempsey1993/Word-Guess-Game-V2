
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

    //Split words into arrays and store in an array
    lettersOfWord = randomWord.split("")

    //Blanks for length of word
    blanks=lettersOfWord.length

    //Loop for "_" of each letter 
    for (var i = 0; i < blanks; i++)    {
        blanksAndCorrect.push("_")
    }
    
    // Document "_" to HTML
    document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ")

    // Console log variables
    console.log (randomWord)

    console.log(lettersOfWord)

    console.log(blanks)

    console.log(blanksAndCorrect)


}

// Game reset function
function reset()    {
    guessesRemaining = 9

    wrongGuess = []

    blanksAndCorrect = []
    
    Game()
}

// To check / compare letters

function checkLetters(letter)   {
    var letterInWord = false
    // Generated word equal to letter , set variable true
    for (var i = 0; i <blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord == true
        }
    }
    //if letterInWord is false
        if(letterInWord){
            for(var i = 0; i< blanks; i++){
                if (randomWord[i] == letter) {
                    blanksAndCorrect[i] = letter
                }
            }
        }
        // push incorrect guess into wrong guess, lower number avail guesses
        else {
            wrongGuess.push(letter);
            guessesRemaining--
        }
        console.log(blanksAndCorrect)
}
