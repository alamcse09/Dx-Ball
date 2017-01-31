var Bat = function(){
	
	var rect;
	var bat = this;
	
	this.init = function( obj ){
	
		bat = obj;
		bat.rect = new Rectangle();
		bat.rect.init( bat.rect );
		
	};
	
	this.setColor = function( color ){
		
		bat.rect.setColor( color );
	};
	
	this.setCoord = function( x, y ){
		
		bat.rect.setCoord( x, y );
	};
	
	this.setDim = function( len, height ){
		
		bat.rect.setDim( len, height );
	};
	
	this.resetPosition = function(){
		
		bat.setCoord( ( windowWidth - batLength ) / 2 , windowHeight - batHeight - 2 );
	};
	
	this.draw = function( context ){
		
		context.clearRect( 0, windowHeight-batHeight-2 , windowWidth, windowHeight+batHeight+2 );
		bat.rect.draw( context );
	};
	
	this.move = function( context, offset ){
		
		bat.rect.setCoord( this.rect.x+offset, this.rect.y );
		bat.draw( context );
	};
}