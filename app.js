
/*
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")	
 */
const countdownText = document.getElementById("countdown-text")

let userScore = 0 
let compScore = 0

gameListeners()

function gameListeners() {
	$("#rock").click(function() {
		rock.classList.add('selected')
		game("rock")
	})
	
	$("#paper").click(function() {
		paper.classList.add('selected')
		game("paper")
	})
	
	$("#scissors").click(function() {
		scissors.classList.add('selected')
		game("scissors")
	})		
}

function game(userPlayer) {
	$('#handsigns div').each((index, ele) => $(ele).off("click"))
	
	countdown()
	
	setTimeout(function() {
		let compPlayer = generateHandsign()
		
		checkWinner(userPlayer, compPlayer)
		
		cleanUp()
	}, 5000)
}

function countdown() {		
	$("#comp-outcome-text").text("")
	$("#game-outcome-text").text("")
	
	countdownText.classList.remove('heartBeat', 'countdown-end')
	countdownText.classList.add('animated', 'zoomInDown', 'countdown-start')
	countdownText.innerHTML = "Ready?"
	
	countdownText.addEventListener('animationiteration', function() {
		countdownText.innerHTML = `${event.elapsedTime}`
	})
	
	countdownText.addEventListener('animationend', function() {
		countdownText.classList.remove('zoomInDown', 'countdown-start')
		countdownText.classList.add('heartBeat', 'countdown-end')
		countdownText.innerHTML = 'FIGHT!'
	})	
}

function generateHandsign() {
	const handsigns = ["rock", "paper", "scissors"]
	let randomIndex = Math.floor(Math.random() * 3)
	
	$("#comp-outcome-text").text(`Computer Player chose ${handsigns[randomIndex]}.`.toUpperCase())
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
	$("#game-outcome-text").text("It's a tie!".toUpperCase())
}

function win(userHandsign, compHandsign) {
	userScore++
	$("#user-score-data").text(userScore)
	$("#game-outcome-text").text(`${userHandsign} ${attackVerb(userHandsign)} ${compHandsign}. You win!!`.toUpperCase())
}

function lose(userHandsign, compHandsign) {
	compScore++
	$("#comp-score-data").text(compScore)
	$("#game-outcome-text").text(`${compHandsign} ${attackVerb(compHandsign)} ${userHandsign}. You lose...`.toUpperCase())
}

function attackVerb(winner) {
	return winner === "rock" ? "smashes" : winner === "paper" ? "covers" : "cut"
}

function cleanUp() {
	location.href = "#handsigns"
	document.querySelectorAll('.selected').forEach(ele => ele.classList.remove('selected'))
	gameListeners()
	
}
