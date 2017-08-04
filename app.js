init(); 
var roundScore = 0; 
var totalScore = 0;



document.querySelector(".roll-dice").addEventListener("click", function () {
	var dice = Math.floor(Math.random() * 6) + 1; 
	console.log(dice)
	
	document.querySelector(".dice").src = 'dice-' + dice + '.png'; 

	roundScore += dice; 
	document.querySelector(".current-1").textContent = roundScore; 

	if(dice === 1) {
		console.log("You lose"); 
	}
	
});


document.querySelector('.hold-dice').addEventListener('click', function () {
	totalScore += roundScore; 

	document.querySelector('.score').textContent = totalScore; 

	roundScore = 0;
	document.querySelector('.current-1').textContent = '0'; 
}); 


function init () { 

	document.querySelector('.current-1').textContent = '0';
	document.querySelector('.score').textContent = '0';
}
