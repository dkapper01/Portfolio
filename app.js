var roundScore = 0; 

document.querySelector(".roll-dice").addEventListener("click", function () {
	var dice = Math.floor(Math.random() * 6) + 1; 
	console.log(dice)
	
	document.querySelector(".dice").src = 'dice-' + dice + '.png'; 

	roundScore += dice; 
	document.querySelector(".current-1").textContent = roundScore; 
	console.log(roundScore); 
	});


