var words = ["ZELDA", "LINK", "HYRULE", "TRIFORCE", "GANON", "FAIRY", "DEKU", "BOOMERANG", "HOOKSHOT", "BOW", "MASTERSWORD", "BOMB", "GORON", "CUCCO", "EPONA", "OCARINA", "RUPEE", "POTION", "BOOTS", "KOKIRI", "HEART", "KOKIRI", "NAVI", "SHIELD", "TEMPLE", "SKULLTULA", "MEDALLION", "MASK"]
var incorrectGuesses = []
var wins = 0
var losses = 0
var currentWord = words[Math.floor(Math.random() * words.length)]
var guessesNumber = 10
var currentClue = []
var newButton = document.createElement("button")
var newImage = document.createElement("img")
var targetAgain = document.getElementById("again")
var targetHearts = document.getElementById("hearts")
var winCondition = false
var lossCondition = false
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
    winCondition = false
    lossCondition = false
    currentWord = words[Math.floor(Math.random() * words.length)]
    for (var k = 0; k < currentWord.length; k++) {
        currentClue[k] = "_"
    }
    document.getElementById("current-word").innerHTML = currentClue.join(" ")
    incorrectGuesses = []
    document.getElementById("guessed-letters").innerHTML = incorrectGuesses.join(", ")
    guessesNumber = 10
    document.getElementById("end-game").innerHTML = ""
    document.getElementById("again").innerHTML = ""
    newImage.setAttribute("src", "assets/images/" + guessesNumber + ".png")
    newImage.setAttribute("id", "hearts-img")
    targetHearts.appendChild(newImage)
}


document.getElementById("current-word").innerHTML = currentClue.join(" ")
newImage.setAttribute("src", "assets/images/" + guessesNumber + ".png")
newImage.setAttribute("id", "hearts-img")
targetHearts.appendChild(newImage)



document.onkeyup = function (event) {

    var userInput = event.key.toUpperCase()
    document.getElementById("music").play()

    for (var j = 0; j < currentWord.length; j++) {
        if (userInput === currentWord[j] && lossCondition == false && winCondition == false) {
            currentClue[j] = currentWord[j]
            document.getElementById("current-word").innerHTML = currentClue.join(" ")
        }
        else if (currentWord.indexOf(userInput) == -1 && incorrectGuesses.indexOf(userInput) == -1 && lossCondition == false && winCondition == false) {
            incorrectGuesses.push(userInput)
            document.getElementById("guessed-letters").innerHTML = incorrectGuesses.join(", ")
            guessesNumber--
            newImage.setAttribute("src", "assets/images/" + guessesNumber + ".png")
            newImage.setAttribute("id", "hearts-img")
            targetHearts.appendChild(newImage)
        }
    }
    if (currentClue.indexOf("_") === -1 && winCondition == false) {
        wins++
        winCondition = true
        document.getElementById("wins-number").innerHTML = wins
        document.getElementById("end-game").innerHTML = "YOU WIN! THE WORD WAS  " + currentWord
        newButton.textContent = "PLAY AGAIN?"
        targetAgain.appendChild(newButton);
        newButton.setAttribute("onclick", "reset()")
        newButton.setAttribute("id", "again-btn")
    }
    if (guessesNumber === 0 && lossCondition == false) {
        losses++
        lossCondition = true
        document.getElementById("losses-number").innerHTML = losses
        document.getElementById("end-game").innerHTML = "YOU LOSE. THE WORD WAS  " + currentWord
        newButton.textContent = "PLAY AGAIN?"
        targetAgain.appendChild(newButton);
        newButton.setAttribute("onclick", "reset()")
        newButton.setAttribute("id", "again-btn")
    }
    if (event.keyCode === 13) {
        document.getElementById("again-btn").click();
        
    }










}