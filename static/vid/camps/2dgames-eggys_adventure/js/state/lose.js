"use strict";
window.EggysAdventure.state.lose = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create win group in map editor and load it like this:
		// mt.create("win");
		
	this.bd = this.game.add.tileSprite(0, 0, 800, 600, '/fail.png');
	this.button = this.game.add.button(252.75, 490.5, '/restart.png', this.retry);

	},
	
	update: function(){
		
	},
	
	retry: function(){
		this.game.state.start("play");
	}
};