var Brick = function(){
	
	var rect;
	var brick;
	
	this.init = function( obj ){
		
		brick = obj;
		brick.rect = new Rectangle();
		brick.rect.init( brick.rect );
	};
	
	this.setColor = function( color ){
		
		brick.rect.setColor( color );
	};
	
	this.setCoord = function( x, y ){
		
		brick.rect.setCoord( x,y );
	};
	
	this.setDim = function( len, height ){
		
		brick.rect.setDim( len, height );
	};
	
	this.draw = function( context ){
		
		brick.rect.draw( context );
	};
}