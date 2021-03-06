
const countdownText = document.getElementById("countdown-text")

let userScore = 0 
let compScore = 0

gameListeners()

function gameListeners() {
	$("#rock-div").click(function() {
		game("rock", this)
	})
	
	$("#paper-div").click(function() {
		game("paper", this)
	})
	
	$("#scissors-div").click(function() {
		game("scissors", this)
	})		
}

function game(userPlayer, div) {
	selectMove(userPlayer, div)
	
	countdown()
	
	setTimeout(function() {
		let compPlayer = generateHandsign()
		
		checkWinner(userPlayer, compPlayer)
		
		cleanUp(userPlayer, div)
	}, 5000)
}

function selectMove(move, div) {
	$(div).addClass('selected')
	$(div).css("background-image", "linear-gradient(#350000, maroon, white)")
	$("html").addClass(`${move}-handsign`)
	$("#handsigns div").each((index, ele) => $(ele).off("click"))
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

function cleanUp(move, div) {
	location.href = "#handsigns-div"
	$(div).removeClass("selected")
	$("html").removeClass(`${move}-handsign`)
	$(div).css("background-image", "")
	gameListeners()
}
