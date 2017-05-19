"use strict";
window.sanctuary.state.GameOver = {
	preload: function(){
		this.gameOver = mt.create("GameOver");
	
		
	},
	create: function(){
		this.game.add.button(400,300,"/PlayAgain.png",this.restartGame,this);
		
		
	},
	restartGame: function(){
		this.game.state.start("play");
		
		
		
	},
	
	
	
	
};