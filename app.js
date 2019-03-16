
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const countdownText = document.getElementById("countdown-text")
const compOutcomeText = document.getElementById("comp-outcome-text")
const gameOutcomeText = document.getElementById("game-outcome-text")
const userScoreData = document.getElementById("user-score-data")
const compScoreData = document.getElementById("comp-score-data")

let userScore = 0 
let compScore = 0

gameListeners()

function gameListeners() {
	rock.addEventListener("click", function() {
		countdown()
		setTimeout(function() {game("rock")}, 10000) //10 seconds
	})
	
	paper.addEventListener("click", function() {
		countdown()
		game("paper")
	})
	
	scissors.addEventListener("click", function() {
		countdown()
		game("scissors")
	})
}

function countdown() {
	var countdown = 3
	let delay = 0
	
	do {
		setTimeout(function() {
			countdownText.style.padding = "20px"
			countdownText.innerHTML = `${countdown}`
			countdownText.style.transition = "font-size 1s ease, color 2s ease"
			countdownText.style.fontSize = "4em"
			countdownText.style.color = "white"	
		},
		delay)
		
		countdown--
		delay = 3000
		
	} while (countdown > 0) 
	
	countdownText.innerHTML = "Fight!"
}

function game(userPlayer) {
	let compPlayer = generateHandsign()
	
	switch (`${userPlayer} vs ${compPlayer}`) {
		case "rock vs rock":
		case "paper vs paper":
		case "scissors vs scissors":
			tie();
			break;
		case "rock vs scissors":
		case "paper vs rock":
		case "scissors vs paper":
			win(userPlayer, compPlayer);
			break;
		case "rock vs paper":
		case "paper vs scissors":
		case "scissors vs rock":
			lose(userPlayer, compPlayer);
			break;
	}
}

function generateHandsign() {
	const handsigns = ["rock", "paper", "scissors"]
	let randomIndex = Math.floor(Math.random() * 3)
	
	compOutcomeText.innerHTML = `Computer Player chose ${handsigns[randomIndex]}.`.toUpperCase()
	return handsigns[randomIndex]
}

function tie() {
	gameOutcomeText.innerHTML = "It's a tie!".toUpperCase()
}

function win(userHandsign, compHandsign) {
	userScore++
	userScoreData.innerHTML = userScore
	gameOutcomeText.innerHTML = `${userHandsign} ${attackVerb(userHandsign)} ${compHandsign}. You win!!`.toUpperCase()
}

function lose(userHandsign, compHandsign) {
	compScore++
	compScoreData.innerHTML = compScore
	gameOutcomeText.innerHTML = `${compHandsign} ${attackVerb(compHandsign)} ${userHandsign}. You lose...`.toUpperCase()
}

function attackVerb(winner) {
	return winner === "rock" ? "smashes" : winner === "paper" ? "covers" : "cut"
}
