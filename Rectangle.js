var Rectangle = function(){
	
	var x;
	var y;
	var length;
	var height;
	var color;
	var rect = this;
	
	this.init = function( obj ){
	
		rect = obj;
	};
	
	this.setColor = function( color ){
		
		rect.color = color;
	};
	
	this.setCoord = function( x, y ){
		
		rect.x = x;
		rect.y = y;
	};
	
	this.setDim = function( len, height ){
		
		rect.length = len;
		rect.height = height;
	};
	
	this.draw = function( context ){
		
		if( rect.x + rect.length > windowWidth )
			rect.x = windowWidth - rect.length;
		else if( rect.x < 0 )
			rect.x = 0;
		
		context.beginPath();
		context.fillStyle = rect.color;
		context.fillRect( rect.x, rect.y, rect.length, rect.height );
		context.fill();
	};
}