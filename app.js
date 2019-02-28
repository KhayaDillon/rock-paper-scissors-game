
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const outcomeText = document.getElementById("outcomeText")

function gameListeners() {
	rock.addEventListener("click", function() {
		game("Rock")
	})
	
	paper.addEventListener("click", function() {
		game("Paper")
	})
	
	scissors.addEventListener("click", function() {
		game("Scissors")
	})
}

gameListeners()

function game(userPlayer) {
	let compPlayer = generateHandsign()
	
	switch (`${userPlayer} vs ${compPlayer}`) {
		case "Rock vs Rock":
		case "Paper vs Paper":
		case "Scissors vs Scissors":
			tie(compPlayer);
			break;
		case "Rock vs Scissors":
		case "Paper vs Rock":
		case "Scissors vs Paper":
			win(userPlayer, compPlayer);
			break;
		case "Rock vs Paper":
		case "Paper vs Scissors":
		case "Scissors vs Rock":
			lose(userPlayer, compPlayer);
			break;
	}

}

function generateHandsign() {
	const handsigns = ["Rock", "Paper", "Scissors"]
	let randomIndex = Math.floor(Math.random() * 3)
	return handsigns[randomIndex]
}

function tie(compHandsign) {
	outcomeText.innerHTML = `Computer Player chose ${compHandsign}. It's a tie!`
}

function win(userHandsign, compHandsign) {
	outcomeText.innerHTML = `${userHandsign} ${attackVerb(userHandsign)} ${compHandsign}. You win!!`
}

function lose(userHandsign, compHandsign) {
	outcomeText.innerHTML = `${compHandsign} ${attackVerb(compHandsign)} ${userHandsign}. You lose...`
}

function attackVerb(winner) {
	return winner === "Rock" ? "smashes" : winner === "Paper" ? "covers" : "cuts"
}
