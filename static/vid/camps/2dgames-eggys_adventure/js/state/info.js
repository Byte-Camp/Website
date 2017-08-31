"use strict";
window.EggysAdventure.state.info = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create win group in map editor and load it like this:
		// mt.create("win");
		
		this.bd = this.game.add.tileSprite(0, 0, 800, 600, '/info.png');
		this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	
	update: function(){
		if(this.spacekey.isDown){
			this.game.state.start("play");
		}
	}
};