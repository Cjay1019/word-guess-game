var words = ["ZELDA", "LINK", "HYRULE", "TRIFORCE", "GANON", "FAIRY", "DEKU", "BOOMERANG", "HOOKSHOT", "BOW", "MASTERSWORD", "BOMB", "GORON", "CUCCO", "EPONA", "OCARINA", "RUPEE", "POTION", "BOOTS", "KOKIRI", "HEART", "KOKIRI", "NAVI", "SHIELD", "TEMPLE", "SKULLTULA", "MEDALLION", "MASK"]
var incorrectGuesses = []
var wins = 0
var losses = 0
var currentWord = words[Math.floor(Math.random() * words.length)]
var guessesNumber = 10
var currentClue = []
var newButton = document.createElement("button")
var targetAgain = document.getElementById("again");
for (var i = 0; i < currentWord.length; i++) {
    currentClue[i] = "_"
}
// DEBUGGING====================================
console.log("words" + words)
console.log("wins" + wins)
console.log("losses" + losses)
console.log("current word" + currentWord)
console.log("number of guesses" + guessesNumber)
// END DEBUGGING================================

function reset() {
    currentClue = []
    currentWord = []    
    currentWord = words[Math.floor(Math.random() * words.length)]
    for (var k = 0; k < currentWord.length; k++) {
        currentClue[k] = "_"
    }
    document.getElementById("current-word").innerHTML = currentClue.join(" ")
    incorrectGuesses = []
    document.getElementById("guessed-letters").innerHTML = incorrectGuesses.join(", ")
    guessesNumber = 10
    document.getElementById("guesses-number").innerHTML = guessesNumber
    document.getElementById("end-game").innerHTML = ""
    document.getElementById("again").innerHTML = ""
}


document.getElementById("current-word").innerHTML = currentClue.join(" ")
document.getElementById("guesses-number").innerHTML = guessesNumber


document.onkeyup = function (event) {

    var userInput = event.key.toUpperCase()

    for (var j = 0; j < currentWord.length; j++) {
        if (userInput === currentWord[j]) {
            currentClue[j] = currentWord[j]
            document.getElementById("current-word").innerHTML = currentClue.join(" ")
        }
        else if (currentWord.indexOf(userInput) == -1 && incorrectGuesses.indexOf(userInput) == -1) {
            incorrectGuesses.push(userInput)
            document.getElementById("guessed-letters").innerHTML = incorrectGuesses.join(", ")
            guessesNumber--
            document.getElementById("guesses-number").innerHTML = guessesNumber
        }
    }
    if (currentClue.indexOf("_") === -1) {
        wins++
        document.getElementById("wins-number").innerHTML = wins
        document.getElementById("end-game").innerHTML = "YOU WIN! THE WORD WAS  " + currentWord
        newButton.textContent = "PLAY AGAIN?"
        targetAgain.appendChild(newButton);
        newButton.setAttribute("onclick", "reset()")
    }
    if (guessesNumber === 0) {
        losses++
        document.getElementById("losses-number").innerHTML = losses
        document.getElementById("end-game").innerHTML = "YOU LOSE. THE WORD WAS  " + currentWord
        newButton.textContent = "PLAY AGAIN?"
        targetAgain.appendChild(newButton);
        newButton.setAttribute("onclick", "reset()")
    }













}