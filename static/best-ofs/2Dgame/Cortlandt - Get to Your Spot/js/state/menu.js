"use strict";
window.GETBACKTOANTARCTICA.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.bg = this.game.add.tileSprite(0, 0, 800, 480, '/MenuScreen.png');
		this.start = this.game.add.button(364, 211, '/PlayButton.png', this.startGame);
	},
	
	update: function(){
		
		
	},
	startGame: function(){
		this.game.state.start("play");
	}
};