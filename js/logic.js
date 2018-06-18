const canvas = document.getElementById("gamecanvas");
const ctx = canvas.getContext("2d");

// ** Global Variables**

// create variables for retry game overlay
var popUp = document.getElementById("overlay");
var tryAgain = document.getElementById("retry");

// add Start Game button
var startGame = document.getElementById("start");
startGame.addEventListener("click", function() {
	canvas.style.display = "block";
	drawModule();
});

// Fix Unit size for snake
const unit = 32;

// Keep score
var score = 0;

// Load images

var background = new Image();
background.src = "images/background.png";

var pikachu = new Image();
pikachu.src = "images/pikachu.png";

var snorlax = new Image();
snorlax.src = "images/snorlax.png";

var pokeBall = new Image();
pokeBall.src = "images/pokeball.png";

// Load audio

var gameMusic = new Audio();
gameMusic.src = "audio/viridian2.mp3";

var ballSound = new Audio();
ballSound.src = "audio/pokeball.mp3";

var gameOver = new Audio();
gameOver.src = "audio/gameover.mp3";


// Snake body ARRAY. Store X and Y co-ordinates in OBJECT
var snake= [];


// create snake x and y coordinates in OBJECT
snake[0] = {		// snake co-ordinates multiply by pixel
	x: 9 * unit, 
	y: 10 * unit
};


// create ball OBJECT
var ball = {
	x: Math.floor(Math.random() * 17 + 1) * unit,
	y: Math.floor(Math.random() * 15 + 3) * unit
};

// create obstacle/snorlax
var obstacleArray = []



// **Control Snake**

// setting of Arrow Keys direction

document.addEventListener('keydown', direction);

var arrowKey;

function direction(input) {
	// console.log(input.keyCode);
	
	if(input.keyCode == 37 && arrowKey != 'right') {
		arrowKey = 'left'
		// console.log("left");
	}
	else if(input.keyCode == 38 && arrowKey != 'down') {
		arrowKey = 'up'
		// console.log("up");

	}
	else if(input.keyCode == 39 && arrowKey != 'left') {
		arrowKey = 'right'
		// console.log("right");
		
	}
	else if(input.keyCode == 40 && arrowKey != 'up') {
		arrowKey = 'down'
		// console.log("down");
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
	for(var j = 0; j < obstacleArray.length; j++) {
		if(obstacleArray[j].x != ball.x && obstacleArray[j].y != ball.y) {
			ctx.drawImage(snorlax, obstacleArray[j].x, obstacleArray[j].y);
		}
	}
};



// Check for collision
function checkCollision(newHead, snake) {
	for(var i = 0; i < snake.length; i++) {
		if(newHead.x == snake[i].x && newHead.y == snake[i].y) { // If New POSITION of snake head collides with ANY Body(Array)		
			return true
		}	
	}
};

function obstacleCollision(newHead, obstacleArray) {
	for(var i = 0; i < obstacleArray.length; i++) {
		if(newHead.x == obstacleArray[i].x && newHead.y == obstacleArray[i].y) {
			return true;
		}
	}
};