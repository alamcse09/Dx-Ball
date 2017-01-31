var CollisionDetector = function(){
	
	var bricks = [];
	var circle;
	var collisionDetector = this;
	
	
	this.setBricks = function( bricks ){
		
		collisionDetector.bricks = bricks;
	};
	
	this.setCircle = function( circle ){
		
		collisionDetector.circle = circle;
	};
	
	this.checkCollision = function(){
		
		var collisionData = {};
		
		for( var i = 0; i < collisionDetector.bricks.length; i++ ){
			
			var brickX = collisionDetector.bricks[i][ "posx" ];
			var brickY = collisionDetector.bricks[i][ "posy" ];
			
			var circleX = collisionDetector.circle.getCenterX();
			var circleY = collisionDetector.circle.getCenterY();
			var circleRadius = collisionDetector.circle.radius;
			
			var disX = Math.abs( circleX - brickX - brickLength / 2 );
			var disY = Math.abs( circleY - brickY - brickLength / 2 );
			
			var collide = false;
			
			if( disX <= brickLength / 2 && disY <= brickHeight / 2 ){
				
				collide = true;
			}
			
			var dx = Math.abs( disX - brickLength / 2 );
			var dy = Math.abs( disY - brickHeight / 2 );
			
			if( dx * dx + dy * dy <= circleRadius * circleRadius ){
				
				collide = true;
			}
			
			if( collide ){
				
				collisionDetector.bricks.splice( i, 1 );
				
				collisionData[ "posx" ] = brickX;
				collisionData[ "posy" ] = brickY;
				
				if( collisionDetector.bricks.length == 0 )
					collisionData[ "finished"] = true;
				break;
			}
		}
		
		return collisionData;
	};
}