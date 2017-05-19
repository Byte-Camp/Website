"use strict";
window.RuneRush.state.gameOver = {
	preload: function(){
	this.gameOver = mt.create("gameOver");
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.start=this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	},
	
	
	
	update: function(){
		if(this.start.isDown){
			this.game.state.start("play");
}
			
	}
};