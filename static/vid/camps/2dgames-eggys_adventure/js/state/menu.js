"use strict";
window.EggysAdventure.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.title = this.game.add.tileSprite(0, 0, 800, 600, '/EA Title PNG.png');
		this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	
	update: function(){
		if(this.spacekey.isDown){
			this.game.state.start("info");
		}
	}
};