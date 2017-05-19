"use strict";
window.TheQuestofReposession.state.story = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.button = this.game.add.button(0, 0, '/Story.png', this.startGame);
	},
	
	update: function(){
		
	},
	
	startGame: function(){
		this.game.state.start("play");	
	}
};