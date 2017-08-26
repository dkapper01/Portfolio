var roundScore = 0; 



 

document.getElementById('roll-btn').addEventListener('click', function() {

	var dice0 = Math.floor(Math.random() * 6) + 1; 
	var dice1 = Math.floor(Math.random() * 6) + 1;
	roundScore += dice0 + dice1; 

	console.log(roundScore);

	document.querySelector('.dice0').src = 'img/dice-' + dice0 + '.png'; 
	document.querySelector('.dice1').src = 'img/dice-' + dice1 + '.png'; 


	

	if(dice0 !== 1 && dice1 !== 1) { 
		document.querySelector('.player-0-round-score').textContent = roundScore; 
	} else {
		roundScore = 0; 
		document.querySelector('.player-0-round-score').textContent = '0'; 

		//next player
	}
});


































































// init(); 
// var score = [0,0]; 
// var roundScore = 0; 
// var activePlayer = 0; 

// document.querySelector(".roll-btn").addEventListener("click", function() { 

// 	var diceOne = Math.floor(Math.random() * 6) + 1; 
// 	var diceTwo = Math.floor(Math.random() * 6) + 1;

// 	document.querySelector(".dice-0").src = "img/dice-" + diceOne + ".png";
// 	document.querySelector(".dice-1").src = "img/dice-" + diceTwo + ".png"; 


// 	if(diceOne !== 1 && diceTwo !== 1) {
// 		roundScore += diceOne + diceTwo; 
// 		document.getElementById('current-' + activePlayer).textContent = roundScore; 
// 		if (diceOne === 6 && diceTwo === 6) {
// 			document.getElementById('score-' + activePlayer).textContent = '0'; 
// 			document.getElementById('current-' + activePlayer).textContent = '0'; 
// 			score[activePlayer] = 0; 
// 			nextPlayer(); 
// 		}

// 	} else { 
// 		document.getElementById('current-' + activePlayer).textContent = '0';

// 	nextPlayer(); 

// 	}
// }); 

// document.querySelector('.hold-btn').addEventListener('click', function () {

// 	score[activePlayer] += roundScore;
// 	document.getElementById('score-' + activePlayer).textContent = score[activePlayer]; 
// 	document.getElementById('current-' + activePlayer).textContent = '0'; 

// 	if(score[activePlayer] >= 100) {
// 		document.querySelector('.panel-' + activePlayer).textContent = 'Winner!'; 

// 		if(activePlayer === 1) {
// 			document.querySelector('.panel-0').textContent = 'Loser!';
// 		} else {
// 			document.querySelector('.panel-1').textContent = 'Loser!';
// 		}
// 	} 
	 
// 	nextPlayer(); 
// });

// document.querySelector('.play-btn').addEventListener('click', starteGame); 
// document.querySelector('.start-btn').addEventListener('click', starteGame)

// function nextPlayer () {
// 	roundScore = 0

// 	if(activePlayer === 0) {
// 		activePlayer = 1; 
// 	} else {
// 		activePlayer = 0
// 	}
// }

// function starteGame () {
// 	score = [0,0]
// 	roundScore = 0; 
// 	document.querySelector('.play-btn').style.display = 'none'; 

// 	document.querySelector(".dice-0").style.display = 'block';
// 	document.querySelector('.dice-1').style.display = 'block'; 
// 	document.querySelector('.start-btn').style.display = 'block'; 
// 	document.querySelector('.roll-btn').style.display = 'block'; 
// 	document.querySelector('.hold-btn').style.display = 'block';  

// 	document.querySelector('.player-score-0').textContent = "0"; 
// 	document.querySelector('.current-score-0').textContent = "0"; 

// 	document.querySelector('.player-score-1').textContent = '0'; 
// 	document.querySelector('.current-score-1').textContent = '0'; 

// 	document.querySelector('.player-name-0').classList.add('bg-success'); 
// 	document.querySelector('.player-name-1').classList.add('bg-danger');
// }

// function init () {

// 	document.querySelector(".dice-0").style.display = 'none';
// 	document.querySelector('.dice-1').style.display = 'none'; 
// 	document.querySelector('.start-btn').style.display = 'none'; 
// 	document.querySelector('.roll-btn').style.display = 'none'; 
// 	document.querySelector('.hold-btn').style.display = 'none';  

// 	document.querySelector('.player-score-0').textContent = "0"; 
// 	document.querySelector('.current-score-0').textContent = "0"; 

// 	document.querySelector('.player-score-1').textContent = '0'; 
// 	document.querySelector('.current-score-1').textContent = '0'; 

// 	document.querySelector('.player-name-0').classList.remove('bg-success'); 
// 	document.querySelector('.player-name-1').classList.remove('bg-danger');


// }
