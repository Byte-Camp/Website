"use strict";
window.TheQuestofReposession.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/Home screen.png');
		this.button = this.game.add.button(140, 370, '/Play button.png', this.startGame);
	},
	
	update: function(){
		
	},
	
	startGame: function(){
		this.game.state.start("story");	
	}
};