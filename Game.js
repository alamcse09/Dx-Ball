var Game = function(){
	
	var context;
	var game = this;
	var circle;
	
	this.setContext = function( context ){
		
		game.context = context;
	}
	
	this.startGame = function(){
			
		var level = new Level();
		
		level.drawLevel( 2 , game.context );
		
		game.circle = new Circle();
		
		game.circle.init( game.circle );
		game.circle.setCenter( windowWidth/2 , windowHeight - 17 );
		game.circle.setRadius( circleRadius );
		game.circle.setSpeed( circleSpeed );
		game.circle.setColor( "black" );
		game.circle.setDirection();
		game.circle.draw( ctx );
		
		setInterval( game.gameStep, stepInterval, ctx );
	}
	
	this.gameStep = function( ctx ){
			
		game.circle.moveCenter();
		game.circle.draw( ctx );
	}
}