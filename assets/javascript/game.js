var words = ["filler1", "filler2", "filler3", "filler4", "filler5", "filler6"]
var incorrectGuesses = []
var wins = 0
var losses = 0
var currentWord = words[Math.floor(Math.random() * words.length)]
var guessesNumber = 10
var currentClue = []
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
    currentWord = words[Math.floor(Math.random() * words.length)]
    for (var k = 0; k < currentWord.length; k++) {
        currentClue[k] = "_"
    }
    document.getElementById("current-word").innerHTML = currentClue.join(" ")
    incorrectGuesses = []
    document.getElementById("guessed-letters").innerHTML = incorrectGuesses.join(", ")
    guessesNumber = 10
    document.getElementById("guesses-number").innerHTML = guessesNumber
}


document.getElementById("current-word").innerHTML = currentClue.join(" ")
document.getElementById("guesses-number").innerHTML = guessesNumber


document.onkeyup = function (event) {

    var userInput = event.key

    for (var j = 0; j < currentWord.length; j++) {
        if (userInput === currentWord[j]) {
            currentClue[j] = currentWord[j]
            document.getElementById("current-word").innerHTML = currentClue.join(" ")
        }
        else if (currentWord.indexOf(userInput) == -1 && incorrectGuesses.indexOf(userInput) == -1){
            incorrectGuesses.push(userInput)
            document.getElementById("guessed-letters").innerHTML = incorrectGuesses.join(", ")
            guessesNumber--
            document.getElementById("guesses-number").innerHTML = guessesNumber
        }
    }
    if (currentClue.indexOf("_") === -1) {
        wins++
        document.getElementById("wins-number").innerHTML = wins
        reset()
    }
    if (guessesNumber === 0) {
        losses++
        document.getElementById("losses-number").innerHTML = losses
        reset()
    }













}