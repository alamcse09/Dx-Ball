var Level = function(){
	
	var noOflevel;
	var level = this;
	
	this.getBrickPosition = function( l ){
		
		var temp = level.brickPositions[ "level" + l ][ "bricks" ];
		console.log( temp );
		return temp;
	};
	
	this.drawLevel = function( lev, context ){
		
		var bricks = level.brickPositions[ "level" + lev ][ "bricks" ];
		
		for( var i =0 ; i< bricks.length; i++ ){
			
			var posx = bricks[ i ][ "posx" ];
			var posy = bricks[ i ][ "posy" ];
			
			var tempRect = new Rectangle();
			
			tempRect.setCoord( posx + 2 , posy + 2 );
			tempRect.setDim( 46, 20 );
			tempRect.setColor( "red" );
			
			tempRect.draw( context );
		}
	};
	
	this.brickPositions = {
		
		"level1" : {
			
			"bricks":[
				{ "posx": 375, "posy": 0 },
				{ "posx": 325, "posy": 25 },
				{ "posx": 275, "posy": 50 },
				{ "posx": 225, "posy": 75 },
				{ "posx": 175, "posy": 100 },
				{ "posx": 125, "posy": 125 },
				{ "posx": 75, "posy": 150 },
				{ "posx": 25, "posy": 175 },
				
				{ "posx": 425, "posy": 25 },
				{ "posx": 475, "posy": 50 },
				{ "posx": 525, "posy": 75 },
				{ "posx": 575, "posy": 100 },
				{ "posx": 625, "posy": 125 },
				{ "posx": 675, "posy": 150 },
				{ "posx": 725, "posy": 175 }
			]
		},
		
		"level2" : {
			
			"bricks": [
				{ "posx": 0, "posy": 0 },
				{ "posx": 50, "posy": 25 },
				{ "posx": 100, "posy": 50 },
				{ "posx": 150, "posy": 75 },
				{ "posx": 200, "posy": 100 },
				{ "posx": 250, "posy": 125 },
				{ "posx": 300, "posy": 150 },
				{ "posx": 350, "posy": 175 },
				{ "posx": 400, "posy": 200 },
				{ "posx": 450, "posy": 225 },
				{ "posx": 500, "posy": 250 },
				{ "posx": 550, "posy": 275 },
				{ "posx": 600, "posy": 300 },
				{ "posx": 650, "posy": 325 },
				{ "posx": 700, "posy": 350 },
				{ "posx": 750, "posy": 375 }
			]
		}
	};
}