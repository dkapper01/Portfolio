init(); 

var roundScore, score, activePlayer, lastDice, game; 

var lastDice0, lastDice1; 
 

document.querySelector('.roll-btn').addEventListener('click', function() {

	var dice0 = Math.floor(Math.random() * 6) + 1; 
	var dice1 = Math.floor(Math.random() * 6) + 1; 

	document.querySelector('.dice0').src = 'img/dice-' + dice0 + '.png'; 
	document.querySelector('.dice1').src = 'img/dice-' + dice1 + '.png';

	if(dice0 !== 1 && dice1 !== 1) { 
		if(dice0 === 6 && dice1 === 6) {
			roundScore = 0;
			score[activePlayer] = 0;
			document.getElementById('player-' + activePlayer + '-score').textContent = '0'; 
			document.querySelector('player-' + activePlayer + '-round-score').textContent = '0';
			nextPlayer(); 
		} else {
			roundScore += dice0 + dice1; 
			document.querySelector('.player-' + activePlayer + '-round-score').textContent = roundScore; 
		}
			
	} else {
		roundScore = 0 
		document.querySelector('.player-' + activePlayer + '-round-score').textContent = '0'; 
		nextPlayer();
	}
});

document.querySelector('.hold-btn').addEventListener('click', function() { 

	if(game) {
		score[activePlayer] += roundScore; 
		document.getElementById('player-' + activePlayer + '-score').textContent = score[activePlayer]; 
		document.querySelector('.player-' + activePlayer + '-round-score').textContent = '0'; 

		if(score[activePlayer] > 100) {

			if(activePlayer === 0) {
				document.querySelector('.player-0-name').textContent = 'Winner';
				document.querySelector('.player-1-name').textContent = 'Loser';

				winner(); 
				return 0;  

			} else {
				document.querySelector('.player-0-name').textContent = 'Loser'; 
				document.querySelector('.player-1-name').textContent = 'Winner'; 
				
				winner(); 
				return 0; 
			}
		}

		nextPlayer(); 
	}
});

function winner() {
	document.querySelector('.roll-btn').style.display = 'none'; 
	document.querySelector('.hold-btn').style.display = 'none'; 
	document.querySelector('.dice0').style.display = 'none'; 
	document.querySelector('.dice1').style.display = 'none'; 

	document.querySelector('.player-0-panel').classList.add('active-player');
	document.querySelector('.player-1-panel').classList.add('active-player');
}

function nextPlayer() {
	if(activePlayer === 0) {
		activePlayer = 1; 
		roundScore = 0; 
		document.querySelector('.player-1-panel').classList.add('active-player'); 
		document.querySelector('.player-0-panel').classList.remove('active-player'); 

	} else if(activePlayer === 1) {
		activePlayer = 0; 
		roundScore = 0; 
		document.querySelector('.player-0-panel').classList.add('active-player');
		document.querySelector('.player-1-panel').classList.remove('active-player'); 

	}
}

document.querySelector('.new-game-btn').addEventListener('click', init);

function init() {

	roundScore = 0; 
	score = [0,0]; 
	activePlayer = 0; 
	lastDice = 0; 
	game = true;  

	document.querySelector('.player-0-panel').classList.add('active-player');
	document.querySelector('.player-1-panel').classList.remove('active-player');

	document.querySelector('.roll-btn').style.display = 'block'; 
	document.querySelector('.hold-btn').style.display = 'block'; 
	document.querySelector('.dice0').style.display = 'block'; 
	document.querySelector('.dice1').style.display = 'block';

	document.querySelector('.player-0-name').textContent = 'Player 1';
	document.querySelector('.player-1-name').textContent = 'Player 2';
	document.getElementById('player-0-score').textContent = '0'; 
	document.getElementById('player-1-score').textContent = '0'; 
	document.querySelector('.player-0-round-score').textContent = '0'; 
	document.querySelector('.player-1-round-score').textContent = '0'; 
}


















































