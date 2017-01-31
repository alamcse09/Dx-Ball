var MouseTracker = function(){
	
	var x;
	var y;
	var prevX;
	var prevY;
	
	this.setCoord = function( x, y ){
		
		this.prevX = this.x;
		this.prevY = this.y;
		this.x = x;
		this.y = y;
	};
	
	this.getDirection = function( ){
			
		return ( this.x - this.prevX );
	};
	
}