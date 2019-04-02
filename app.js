
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
		game("rock")
	})
	
	paper.addEventListener("click", function() {
		game("paper")
	})
	
	scissors.addEventListener("click", function() {
		game("scissors")
	})	
}

function game(userPlayer) {
	countdown()
	
	countdownText.addEventListener('animationend', function() {
		countdownText.classList.remove('zoomInDown', 'countdown-start')
		countdownText.classList.add('heartBeat', 'countdown-end')
		countdownText.innerHTML = 'FIGHT!'
	})	
	
	setTimeout(function() {
		let compPlayer = generateHandsign()
		
		checkWinner(userPlayer, compPlayer)
	}, 5000)
}

// countdown with paper is still wonky for some reason

function countdown() {		
	compOutcomeText.innerHTML = ""
	gameOutcomeText.innerHTML = ""
	
	countdownText.classList.remove('heartBeat', 'countdown-end')
	countdownText.classList.add('animated', 'zoomInDown', 'countdown-start')
	countdownText.innerHTML = "Ready?"
	
	countdownText.addEventListener('animationiteration', function() {
		countdownText.innerHTML = `${event.elapsedTime}`
	})
}

function generateHandsign() {
	const handsigns = ["rock", "paper", "scissors"]
	let randomIndex = Math.floor(Math.random() * 3)
	
	compOutcomeText.innerHTML = `Computer Player chose ${handsigns[randomIndex]}.`.toUpperCase()
	return handsigns[randomIndex]
}

function checkWinner(userPlayer, compPlayer) {
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
