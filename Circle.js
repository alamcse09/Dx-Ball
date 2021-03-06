var Circle = function(){

	var centerX;
	var centerY;
	var prevCenterX;
	var prevCenterY;
	var radius;
	var speed;
	var color;
	var signX = 1;
	var signY = -1;
	var circle = this;
	var bat;
	
	this.setBat = function( bat ){
			
		circle.bat = bat;
	};

	this.init = function( obj ){

		circle = obj;
		circle.prevCenterX = -1;
		circle.prevCenterY = -1;
	};

	this.getCenterX = function(){
		
		return circle.centerX;
	};
	
	this.getCenterY = function(){
		
		return circle.centerY;
	};
	
	this.getRadius = function(){
		
		return circle.radius;
	};
	
	this.setDirection = function(){
		
		circle.signX = 1;
		circle.signY = -1;
	};

	this.resetPosition = function(){
			
		circle.setCenter( windowWidth/2 , windowHeight - batHeight - 2 - circle.radius );
	};
	
	this.setCenter = function( x,y ){
		
		circle.prevCenterX = circle.centerX;
		circle.prevCenterY = circle.centerY;
		circle.centerX = x;
		circle.centerY = y;
	};

	this.setSpeed = function( speed ){
		
		circle.speed = speed;
	};

	this.setColor = function( color ){

		circle.color = color;
	};

	this.move = function( context, offset ){
		
		circle.centerX += offset;
		
		if( circle.centerX < batLength/2 )
			circle.centerX = batLength/2;
		else if( circle.centerX > ( windowWidth - batLength/2 ) )
			circle.centerX = windowWidth - batLength/2;
		
		circle.setCenter( circle.centerX, circle.centerY );
		//circle.clearPreviousCircle( context );
		circle.draw( context );
	};
	
	this.moveCenter = function( batx, baty ){
		
		var newX = circle.centerX + circle.signX * circle.speed;
		var newY = circle.centerY + circle.signY * circle.speed;
		
		var disX = Math.abs( circle.radius + newX - batx - batLength/2 );
		
		if( newX + circle.radius > windowWidth || newX - circle.radius < 0){
			
			circle.signX *= -1;
		}
		
		if( newY - circle.radius < 0 || ( newY + circle.radius > windowHeight - batHeight-2 && disX < circle.radius + batLength/2 ) ){
			
			circle.signY *= -1;	
		}
		
		circle.setCenter( circle.centerX + circle.signX * circle.speed, circle.centerY + circle.signY * circle.speed );
	};

	this.setRadius = function( r ){
		
		circle.radius = r;
	};

	this.clearPreviousCircle = function( context ){
		
		if( circle.prevCenterX > 0 && circle.prevCenterY > 0 && circle.prevCenterX != circle.centerX && circle.prevCenterY != circle.centerY ){
			
			context.beginPath();
			context.clearRect( circle.prevCenterX-circle.radius, circle.prevCenterY-circle.radius, 2 * circle.radius, 2 * circle.radius );
		}
	};
	
	this.draw = function( context ){
		
		context.beginPath();
		
		context.fillStyle = circle.color;
		context.arc( circle.centerX, circle.centerY,circle.radius, 0, 2*Math.PI, false );
		context.fill();
		
		circle.clearPreviousCircle( context );
	};
}