const kbb = ["keo","bua","bao"]
const playerchoice = document.getElementById("playerchoice")
const computerchoice = document.getElementById("computerchoice")
const gameresult = document.getElementById("gameresult")
const points = document.getElementById("points")
const yourscoredisplay = document.getElementById("yourscoredisplay")
const computerscoredisplay = document.getElementById("computerscoredisplay")
let yourscore = 0
let computerscore = 0
// value của let có thể thay đổi còn const thì ko, chắc v:))
function option (playeroption) {
const computeroption = kbb[Math.floor(Math.random() * 3)]
let result = ""
computerchoice.textContent = `Computer's choice: ${computeroption}`
playerchoice.textContent = `Player choice: ${playeroption}`
if(playeroption === computeroption) {
    result = `TIE`
} else {
    switch(playeroption) {
        case "bua":
        result = (computeroption ==="keo") ? "U WIN:D" : "U LOSE:v"
        break;
        case "keo":
        result = (computeroption ==="bao") ? "U WIN:D" : "U LOSE:v"
        break;
        case "bao":
        result = (computeroption ==="bua") ? "U WIN:D" : "U LOSE:v"
        break;
    }
}
gameresult.textContent = `Result: ${result}`
if(result === "TIE") {
    // None will get point
} else if (result === "U WIN:D") {
    yourscore++
    } else if (result === "U LOSE:v") {
        computerscore ++
    }
   yourscoredisplay.textContent = `Your scores: ${yourscore}`
   computerscoredisplay.textContent = `Computer's score: ${computerscore}`
}