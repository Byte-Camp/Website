"use strict";
window.EggysAdventure.state.win = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create win group in map editor and load it like this:
		// mt.create("win");
		
	this.bd = this.game.add.tileSprite(0, 0, 800, 600, '/success.png');
	this.button = this.game.add.button(270, 410, '/menu.png', this.Menu);

	},
	
	update: function(){
		
	},
	
	Menu: function(){
		this.game.state.start("menu");
	}
};