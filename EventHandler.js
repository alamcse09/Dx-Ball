
var mouseTracker = new MouseTracker();

function mouseMoveHandler( event ){
	
	var x = event.clientX;
	var y = event.clientY;
	
	mouseTracker.setCoord( x, y );
	
	if( clicked )
		bat.move( ctx, mouseTracker.getDirection() );
	
}

function mouseClicked( event ){
	
	clicked = true;
	mouseTracker.setCoord( event.clientX, event.clientY );
}

document.onmousemove = mouseMoveHandler;
document.onclick = mouseClicked;