var Game = function(){
	
	var context;
	var game = this;
	var circle;
	var bricks;
	var point;
	var collisionDetector;
	
	this.setContext = function( context ){
		
		game.context = context;
		game.point = 0;
	}
	
	this.startGame = function(){
			
		var level = new Level();
		
		game.bricks = level.getBrickPosition( 1 );
		
		console.log( game.bricks );
		
		level.drawLevel( 1 , game.context );
		
		game.circle = new Circle();
		
		game.circle.init( game.circle );
		game.circle.setRadius( circleRadius );
		game.circle.setCenter( windowWidth/2 , windowHeight - batHeight - 2 - game.circle.radius );
		game.circle.setSpeed( circleSpeed );
		game.circle.setColor( "blue" );
		game.circle.setDirection();
		game.circle.draw( ctx );
		
		game.collisionDetector = new CollisionDetector();
		
		game.collisionDetector.setBricks( game.bricks );
		game.collisionDetector.setCircle( game.circle );
		
		setInterval( game.gameStep, stepInterval, ctx );
	}
	
	this.clearRectangel = function( collisionData ){
		
		game.context.clearRect( collisionData[ "posx" ], collisionData[ "posy" ] , brickLength + 2, brickHeight + 2 );
	};
	
	this.gameStep = function( ctx ){
		
		if( clicked ){
			
			var collisionData = game.collisionDetector.checkCollision();
			
			if( Object.keys( collisionData ).length != 0 ){
				
				console.log( collisionData );
				game.clearRectangel( collisionData );
			}
			
			game.circle.moveCenter();
			game.circle.draw( ctx );
		}
	};
}