"use strict";
window.sanctuary.state.win = {
	preload: function(){
		this.win = mt.create("WinScreen");
	
		
	},
	create: function(){
		this.game.add.button(400,400,"/PlayAgain.png",this.restartGame,this);
		
		
	},
	restartGame: function(){
		this.game.state.start("play");
		
		
		
	},
	
	
	
	
};