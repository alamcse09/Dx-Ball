
var mouseTracker = new MouseTracker();

function mouseMoveHandler( event ){
	
	var x = event.clientX;
	var y = event.clientY;
	
	mouseTracker.setCoord( x, y );
	
	if( doubleClicked || clicked )
		bat.move( ctx, mouseTracker.getDirection() );
	if( clicked && !doubleClicked )
		circle.move( ctx, mouseTracker.getDirection() );
	
}

function mouseClicked( event ){
	
	if( clicked )
		doubleClicked = true;
	else
		doubleClicked = false;
	
	clicked = !clicked;
	mouseTracker.setCoord( event.clientX, event.clientY );
}

document.onmousemove = mouseMoveHandler;
document.onclick = mouseClicked;