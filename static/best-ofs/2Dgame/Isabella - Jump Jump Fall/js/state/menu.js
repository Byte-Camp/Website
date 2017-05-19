"use strict";
window.jumpjumpfall.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.back = this.game.add.tileSprite(0, 0, 2000, 600, '/g4005.png');
		this.start = this.game.add.button(232, 111,'/play.png', this.startGame);
	},
	
	update: function(){
		
	},
		startGame: function(){
			this.game.state.start("play");
		}
};