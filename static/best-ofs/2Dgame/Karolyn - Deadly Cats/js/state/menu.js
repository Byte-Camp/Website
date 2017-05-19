"use strict";
window.deadlycats.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.bg = this.game.add.tileSprite(0, 0, 2000, 600, '/new menu.png');
		this.play = this.game.add.button(656, 280, '/now.png', this.playgame);
	},
	
	update: function(){
		
	},
	playgame: function(){
		this.game.state.start("play");
	}
};