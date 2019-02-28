
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const outcomeText = document.getElementById("outcomeText")

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

gameListeners()

function game(userPlayer) {
	let compPlayer = generateHandsign()
	
	switch (`${userPlayer} vs ${compPlayer}`) {
		case "rock vs rock":
		case "paper vs paper":
		case "scissors vs scissors":
			tie(compPlayer);
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
	return handsigns[randomIndex]
}

function tie(compPlayer) {
	outcomeText.innerHTML = `Computer Player chose ${compPlayer}. It's a tie!`
}
