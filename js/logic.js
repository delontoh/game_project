const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

// ** Global Variables**

// Fix Unit size for snake
const unit = 32;

// Keep score
var score = 0;

// Load images

var background = new Image();
background.src = "images/background1.png";

var pikachu = new Image();
pikachu.src = "images/pikachu.png";

var snorlax = new Image();
snorlax.src = "images/snorlax.png";

var pokeBall = new Image();
pokeBall.src = "images/pokeball.png";


// Snake body ARRAY. Store X and Y co-ordinates in OBJECT
var snake= [];

snake[0] = {		// snake co-ordinates multiply by pixel
	x: 9 * unit, 
	y: 10 * unit
};


// create ball/food
var ball = {
	x: Math.floor(Math.random() * 17 + 1) * unit,
	y: Math.floor(Math.random() * 15 + 3) * unit
};


// create obstacle/snorlax
var obstacleArray = []

// obstacle = {
// 	x: Math.floor(Math.random() * 17 + 1) * unit,
// 	y: Math.floor(Math.random() * 15 + 3) * unit
// };




// **Control Snake**

// setting of Arrow Keys direction

document.addEventListener('keydown', direction);

var arrowKey;

function direction(input) {
	console.log(input.keyCode);
	
	if(input.keyCode == 37 && arrowKey != 'right') {
		arrowKey = 'left'
		console.log("left");
	}
	else if(input.keyCode == 38 && arrowKey != 'down') {
		arrowKey = 'up'
		console.log("up");

	}
	else if(input.keyCode == 39 && arrowKey != 'left') {
		arrowKey = 'right'
		console.log("right");
		
	}
	else if(input.keyCode == 40 && arrowKey != 'up') {
		arrowKey = 'down'
		console.log("down");
		
	}
};



// push OBJECT with values into an ARRAY
function createObstacle() {
	var obstacleObject = {
		x: Math.floor(Math.random() * 17 + 1) * unit,
		y: Math.floor(Math.random() * 15 + 3) * unit
	}
	obstacleArray.push(obstacleObject);
};

// Loop through the ARRAY above and draw image based on X and Y values of OBJECT.
function drawObstacle() {
	for(var j = 0; j < obstacleArray.length; j++)
		ctx.drawImage(snorlax, obstacleArray[j].x, obstacleArray[j].y);
};



// Check for collision
function checkCollision(newHead, snake) {
	for(var i = 0; i < snake.length; i++) {
		if(newHead.x == snake[i].x && newHead.y == snake[i].y) { // If New POSITION of snake head collides with ANY Body(Array)		
			return true
		}	
		else {
			return false
		}
	}
};
// problem:  argument is fulfilled when newHead xy == array[0]
function obstacleCollision(newHead, obstacleArray) {
	for(var i = 0; i < obstacleArray.length; i++) {
		if(newHead.x == obstacleArray[i].x && newHead.y == obstacleArray[i].y) {
			return true
		}
		else {
			return false
		}
	}
};




// **Draw images. Background, Snake, Food, Score**

// function draw() {

// 	ctx.drawImage(background, 0, 0);	// draw background at fixed position

// 	// ctx.fillStyle = 'gray';
// 	// ctx.fillRect(0, 0, 608, 608);
// 	// ctx.strokeStyle = 'black'
// 	// ctx.strokeRect(0, 0, 608, 608);
		
// 	for(var i = 0; i < snake.length; i++) {		// loop through snake ARRAY
// 		if(i == 0) {	
// 			// ctx.fillStyle = 'blue';	// fill snake Head color
// 			ctx.drawImage(pikachu, snake[i].x, snake[i].y);
// 		}
// 		else {
// 			// ctx.fillStyle = 'white';	// fill snake Body color
// 			ctx.drawImage(pokeBall, snake[i].x - 1, snake[i].y - 1);
// 		}
// 		// ctx.fillRect(snake[i].x, snake[i].y, unit, unit);  // add outline. width and height equals to 30px
// 	};

// 	ctx.drawImage(pokeBall, ball.x, ball.y);	// draw ball at ball's co-ordinates which are randomized
	
// 	drawObstacle();	// call draw obstacle


// 	// Old snake head position
// 	var snakeX = snake[0].x;	//assign snake OBJECT value to variables. To determin OLD snake head's POSITION later.
// 	var snakeY = snake[0].y;


// 	// snake will keep on moving in the specified direction when it is being redrawn at intervals.
// 	// when snake changes direction. Pixels read relative from left to right and relative from top to bottom.

// 	if(arrowKey == 'left') {
// 		snakeX -= unit;		// when snake moves left, head will shift -ve to the left by 1 unit; 30px
// 	}
// 	if(arrowKey == 'up') {	// when snake moves up, head will shift -ve upwards by 1 unit.
// 		snakeY -= unit;
// 	}
// 	if(arrowKey == 'right') {
// 		snakeX += unit;
// 	}
// 	if(arrowKey == 'down') {
// 		snakeY += unit;
// 	}

// 	// New snake head
// 	var newHead = {		// create OBJECT to determine NEW POSITION of snake head
// 		x: snakeX,
// 		y: snakeY
// 	};

// 	// When snake eats ball => increase score AND create new ball.
// 	if(snakeX == ball.x && snakeY == ball.y) {
// 		score++;
// 		ball = {
// 			x: Math.floor(Math.random() * 17 + 1) * unit,
// 			y: Math.floor(Math.random() * 15 + 3) * unit
// 		}
// 	}
// 	else { 
// 		snake.pop(); //  keep removing tail until snake eats ball
// 	};


// 	// Check for Game over conditions - Collision between snake/body and snake/boundry
// 	if(snakeX < 0 * unit || snakeY < 0 * unit  || snakeX > 18 * unit || snakeY > 18 * unit || checkCollision(newHead, snake) || obstacleCollision(newHead, obstacleArray)) {

// 		 clearInterval(speed);
// 		 console.log(newHead);
// 		 console.log(snake);
// 		 console.log(obstacleArray);
// 	};


// 	// push New Head to front of ARRAY to make it index[0]
// 	snake.unshift(newHead);	

// 	ctx.fillStyle = 'white';	// draw Score
// 	ctx.font = '35px "Comic Sans MS", cursive, sans-serif';
// 	ctx.fillText(score, 2 * unit, 2 * unit);
// };


// // Call draw function at specified interval
// var speed = setInterval(draw, 120);

// setInterval(createObstacle, 5000);


