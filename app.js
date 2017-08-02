<<<<<<< HEAD


=======
var roundScore = 0; 
var totalScore = 0; 
<<<<<<< HEAD
>>>>>>> f4e362a15a6ac359f9205e4ffc544311b2e47b3f
=======

>>>>>>> 9a9316b64fa6c9cfbb2635fd6fbf39977b73e542
document.querySelector(".roll-dice").addEventListener("click", function () {
	var dice = Math.floor(Math.random() * 6) + 1; 
	console.log(dice)
	
	document.querySelector(".dice").src = 'dice-' + dice + '.png'; 

	roundScore += dice; 
	document.querySelector(".current-1").textContent = roundScore; 
	console.log(roundScore); 
});

<<<<<<< HEAD
=======

document.querySelector('.hold-dice').addEventListener('click', function () {
	totalScore = roundScore; 

	document.querySelector('.score').textContent = totalScore; 


})
>>>>>>> f4e362a15a6ac359f9205e4ffc544311b2e47b3f
