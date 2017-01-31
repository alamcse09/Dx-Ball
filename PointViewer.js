var PointViewer = function(){
	
	var point = 0;
	var pointViewer = this;
	var context;
	var level;
	
	this.setContext = function( context ){
		
		pointViewer.context = context;
	};
	
	this.setPoint = function( point ){
		
		pointViewer.point = point;
	};
	
	this.setLevel = function( level ){
		
		pointViewer.level = level;
	};
	
	this.updatePoint = function( context ){
		
		pointViewer.point++;
		
		context.clearRect( 0, 0, 800, 100 );
		context.font = "30px Comic Sans MS";
		context.fillStyle = "red";
		context.textAlign = "center";
		context.fillText("Point : " + pointViewer.point , 400 , 40 );
		
		context.fillStyle = "green";
		context.fillText("Level : " + pointViewer.level , 400 , 70 );
	};
	
	this.showGameOver = function( context, win ){
		
		context.clearRect( 0, 0, windowWidth, windowHeight );
		context.font = "30px Arial"
		context.fillStyle = "red";
		context.textAlign = "center";
		if( win )
			context.fillText("You Win!! Score " + pointViewer.point , windowWidth/2, windowHeight/2 );
		else
			context.fillText("You Loose :(  Score " + pointViewer.point , windowWidth/2, windowHeight/2 );
	};
}