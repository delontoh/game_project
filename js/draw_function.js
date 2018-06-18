
function drawModule(){
	
	startGame.style.display = "none";

// **Draw images. Background, Snake, Food, Score**

function draw() {

	ctx.drawImage(background, 0, 0);	// draw background at fixed position
		
	for(var i = 0; i < snake.length; i++) {		// loop through snake ARRAY
		if(i == 0) {	
			ctx.drawImage(pikachu, snake[i].x, snake[i].y);
		}
		else {
			ctx.drawImage(pokeBall, snake[i].x - 1, snake[i].y - 1);
		}
	};

	ctx.drawImage(pokeBall, ball.x, ball.y);	// draw ball at ball's co-ordinates which are randomized
	
	drawObstacle();	// call drawObstacle function

	gameMusic.play(); // play game background music


	// Old snake head position
	var snakeX = snake[0].x;	//assign snake OBJECT value to variables. To determin OLD snake head's POSITION later.
	var snakeY = snake[0].y;


	// snake will keep on moving in the specified direction when it is being redrawn at intervals.
	// when snake changes direction. Pixels read relative from left to right and relative from top to bottom.

	if(arrowKey == 'left') {
		snakeX -= unit;		// when snake moves left, head will shift -ve to the left by 1 unit; 30px
	}
	if(arrowKey == 'up') {	// when snake moves up, head will shift -ve upwards by 1 unit.
		snakeY -= unit;
	}
	if(arrowKey == 'right') {
		snakeX += unit;
	}
	if(arrowKey == 'down') {
		snakeY += unit;
	}

	// New snake head
	var newHead = {		// create OBJECT to determine NEW POSITION of snake head
		x: snakeX,
		y: snakeY
	};

	// When snake eats ball => increase score AND create new ball.
	if(snakeX == ball.x && snakeY == ball.y) {
		score++;
		ballSound.play();
		ball = {
			x: Math.floor(Math.random() * 17 + 1) * unit,
			y: Math.floor(Math.random() * 15 + 3) * unit
		}
	}
	else { 
		snake.pop(); //  keep removing tail until snake eats ball
	};


	// Check for Game over conditions - Collision between snake/body and snake/boundry
	if(snakeX < 0 * unit || snakeY < 0 * unit  || snakeX > 18 * unit || snakeY > 18 * unit || checkCollision(newHead, snake) || obstacleCollision(newHead, obstacleArray)){
		clearInterval(speed);
		gameMusic.volume = 0;	
		gameOver.play();
		gameOver.volume = 0.3;
		popUp.style.display = "block";
		document.getElementById("score").innerHTML = score;	// add innerHTML to display score
		tryAgain.addEventListener("click", function() {		// add event listener to Try Again button to reload page
			location.reload();
		});
		console.log(newHead);
		console.log(obstacleArray);
		console.log(score);
	};


	// push New Head to front of ARRAY to make it index[0]
	snake.unshift(newHead);	

	// draw Score
	ctx.fillStyle = 'yellow';	
	ctx.font = '35px "Comic Sans MS", cursive, sans-serif';
	ctx.fillText(score, 1 * unit, 1.5 * unit);

}; // end of draw function

setInterval(createObstacle, 5000);

var speed;

if(score <= 5) {
	speed = setInterval(draw, 150);
}
else if(score >= 6) {
	clearInterval(speed);
	speed = setInterval(draw, 90);
};

}; // end of drawModule function
