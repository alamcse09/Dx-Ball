var PointViewer = function(){
	
	var point;
	var pointViewer = this;
	var context;
	
	this.setContext = function( context ){
		
		pointViewer.context = context;
	};
	
	this.setPoint = function( point ){
		
		pointViewer.point = point;
	};
	
	this.updatePoint = function( point, context ){
		
		pointViewer.point = point;
		
		context.beginPath();
		context.font = "2px Arial";
		context.fillText("Point : " + pointViewer.point , windowWidth-100 , 30 );
	};
	
	this.draw = function( context ){
		
		context.beginPath();
		context.font = "20px Arial";
		context.fillText("Point : " + pointViewer.point , windowWidth-100 , 30 );
	}
}