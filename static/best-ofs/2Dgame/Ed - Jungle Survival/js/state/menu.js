"use strict";
window.Junglesurvival.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.bg = this.game.add.tileSprite(0, 0, 1800, 800, '/Menu.png');
		this.start = this.game.add.button(640, 275,'/startb.png',this.startGame);
	},
	
	update: function(){
		
	},
	
	startGame: function(){
		this.game.state.start("play");
	}
};