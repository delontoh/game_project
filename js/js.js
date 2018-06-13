





var obstacleArray = []


function numObstacle(score) {
	for(var i = 3; i <= 285; i+= 3) {
		if(score != 0 && score % i === 0 && obstacle.x != ball.x && obstacle.y != ball.y) {
			var = obstacleObject {
				x: Math.floor(Math.random() * 17 + 1) * unit,
				y: Math.floor(Math.random() * 15 + 3) * unit
			}
			obstacleArray.push(obstacleObject);

			for(var j = 0; j < obstacleArray.length; j++) {
			drawImage(obstacleArray[i], obstacleObject.x, obstacleObject.y);
			}
		}	
	}
};





function createObstacle(score) {
	
		if(score != 0 && score % 3 === 0) {		//&& obstacle.x != ball.x && obstacle.y != ball.y
		// 	// ctx.drawImage(snorlax, obstacle.x, obstacle.y);
		// }
			var obstacleObject = {
				x: Math.floor(Math.random() * 17 + 1) * unit,
				y: Math.floor(Math.random() * 15 + 3) * unit
			}
			obstacleArray.push(obstacleObject);

		}
	
}


function numObstacle(score) {
	for(var i = 3; i<= 285; i+=3) {
		if(score != 0 && score % 3 === 0) {		//&& obstacle.x != ball.x && obstacle.y != ball.y
		// 	// ctx.drawImage(snorlax, obstacle.x, obstacle.y);
		// }
			var obstacleObject = {
				x: Math.floor(Math.random() * 17 + 1) * unit,
				y: Math.floor(Math.random() * 15 + 3) * unit
			}
			obstacleArray.push(obstacleObject);
		
			for(var j = 0; j < obstacleArray.length; j++) {
				ctx.drawImage(snorlax, obstacleArray[j].x, obstacleArray[j].y);
			}
		}
	}
};