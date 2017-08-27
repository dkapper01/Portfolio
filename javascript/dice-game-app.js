init(); 
var roundScore = 0; 
var score = [0,0]; 
var activePlayer = 0; 
 

document.querySelector('.roll-btn').addEventListener('click', function() {

	var dice0 = Math.floor(Math.random() * 6) + 1; 
	var dice1 = Math.floor(Math.random() * 6) + 1;
	roundScore += dice0 + dice1; 

	document.querySelector('.dice0').src = 'img/dice-' + dice0 + '.png'; 
	document.querySelector('.dice1').src = 'img/dice-' + dice1 + '.png';

	if(dice0 !== 1 && dice1 !== 1) { 
		document.querySelector('.player-' + activePlayer + '-round-score').textContent = roundScore; 
	} else {
		roundScore = 0 
		document.querySelector('.player-' + activePlayer + '-round-score').textContent = '0'; 
		nextPlayer();
	}
});

document.querySelector('.hold-btn').addEventListener('click', function() { 

	score[activePlayer] += roundScore; 
	document.getElementById('player-' + activePlayer + '-score').textContent = score[activePlayer]; 
	document.querySelector('.player-' + activePlayer + '-round-score').textContent = '0'; 

	nextPlayer(); 
});

function nextPlayer() {
	if(activePlayer === 0) {
		activePlayer = 1; 
		roundScore = 0; 
		document.querySelector('.player-1-panel').classList.add('active-player'); 
		document.querySelector('.player-0-panel').classList.remove('active-player'); 

	} else {
		activePlayer = 0; 
		roundScore = 0; 
		document.querySelector('.player-0-panel').classList.add('active-player');
		document.querySelector('.player-1-panel').classList.remove('active-player'); 

	}
}

document.querySelector('.new-game-btn').addEventListener('click', init);

function init() {

	document.getElementById('player-0-score').textContent = '0'; 
	document.getElementById('player-1-score').textContent = '0'; 
	document.querySelector('.player-0-round-score').textContent = '0'; 
	document.querySelector('.player-1-round-score').textContent = '0'; 
}


















































