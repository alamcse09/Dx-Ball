var Game = function(){
	
	var context;
	var infoContext;
	var game = this;
	var circle;
	var bricks;
	var bat;
	var point;
	var collisionDetector;
	var pointViewer;
	var currentLevel;
	var intervalId;
	var life;
	
	this.setInfoContext = function( infoContext ){
		
		game.infoContext = infoContext;
	};
	
	this.setPointViewer = function( pointViewer ){
		
		game.pointViewer = pointViewer;
		game.pointViewer.setPoint( 0 );
	};
	
	this.setBat = function( bat ){
		
		game.bat = bat;
	};
	
	this.setCircle = function( circle ){
		
		game.circle = circle;
	};
	
	this.setContext = function( context ){
		
		game.context = context;
		game.point = 0;
		game.currentLevel = 1;
		game.life = 5;
	};
	
	this.loadCurrentLevel = function(){
		
		var level = new Level();
		
		var gameOver = level.isGameOver( game.currentLevel );
		if( gameOver ){
			
			return false;
		}
		
		if( !game.bricks || game.bricks.length == 0)
			game.bricks = level.getBrickPosition( game.currentLevel );
		
		level.drawLevel( game.context, game.bricks );
		
		game.bat.draw( ctx );
		game.circle.draw( ctx );
		return true;
	};
	
	this.startGame = function(){
		
		if( game.life == 0 ){
			
			game.pointViewer.showGameOver( game.context, false );
			return;
		}
		
		game.bat.resetPosition();
		game.bat.draw( game.context );
		
		game.collisionDetector = new CollisionDetector();
		
		var canDraw = game.loadCurrentLevel();
		
		if( !canDraw ){
			
			game.pointViewer.showGameOver( game.context, true );
			return;
		}
		
		game.collisionDetector.setBricks( game.bricks );
		game.collisionDetector.setCircle( game.circle );
		
		game.pointViewer.setLevel( game.currentLevel );
		
		game.intervalId = setInterval( game.gameStep, stepInterval, ctx );
	}
	
	this.clearRectangel = function( collisionData ){
		
		game.context.clearRect( collisionData[ "posx" ], collisionData[ "posy" ] , brickLength + 2, brickHeight + 2 );
	};
	
	this.gameStep = function( ctx ){
		
		if( doubleClicked ){
			
			var collisionData = game.collisionDetector.checkCollision();
			
			if( Object.keys( collisionData ).length != 0 ){
				
				game.clearRectangel( collisionData );
				
				game.pointViewer.updatePoint( game.infoContext );
				
				if( collisionData[ "finished" ] ){
					
					clearInterval( game.intervalId );
					game.currentLevel++;
					doubleClicked = false;
					game.startGame();
					return;
				}
			}
			
			game.circle.moveCenter( game.bat.rect.x , game.bat.rect.y );
			
			var dead = game.checkIfDead( game.circle );
			
			if( dead )
				game.bat.draw( ctx );
			
			game.circle.draw( ctx );
		}
	};
	
	this.checkIfDead = function( circle ){
		
		if( circle.centerY + circle.radius > windowHeight ){
			
			clearInterval( game.intervalId );
			doubleClicked = false;
			//game.life--;
			game.startGame();
			return true;
		}
		else
			return false;
	};
}