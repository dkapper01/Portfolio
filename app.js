init(); 
var roundScore = 0; 
var totalScore = 0;
var activePlayer = 0; 
totalScore = [0,0]; 



document.querySelector(".roll-dice").addEventListener("click", function () {
	var dice = Math.floor(Math.random() * 6) + 1; 
	
	
	document.querySelector(".dice").src = 'dice-' + dice + '.png'; 
	console.log(dice); 

	if(dice != 1) {
		roundScore += dice; 
		document.querySelector(".current-0").textContent = roundScore; 
	} else {
		roundScore = 0;
		// next player
		activePlayer = 1; 
		console.log('next player'); 
	}
	
});


document.querySelector('.hold-dice').addEventListener('click', function () {
	totalScore[activePlayer] += roundScore; 

	document.querySelector('.score').textContent = totalScore[activePlayer]; 

	roundScore = 0;
	document.querySelector('.current-0').textContent = '0'; 

	if(totalScore[activePlayer] >= 30) {
		console.log('winner');
		document.querySelector('.players-info').innerHTML = '<h1>Winner!</h1>'
	}
}); 


function init () { 

	document.querySelector('.current-0').textContent = '0';
	document.querySelector('.score').textContent = '0';
}
