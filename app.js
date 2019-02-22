
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")


function gameListeners() {
	rock.addEventListener("click", function() {
		alert("Test")
	})
	
	paper.addEventListener("click", function() {
		alert("Test")
	})
	
	scissors.addEventListener("click", function() {
		alert("Test")
	})
}

gameListeners()

