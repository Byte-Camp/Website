"use strict";
window.TheQuestofReposession.state.win = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.win = this.game.add.tileSprite(0, 0, 800, 600, '/Win Page.png');
		this.main = this.game.add.button(500, 370, '/Main Menu Button.png', this.mainMenu);
		this.retry = this.game.add.button(140, 370, '/Retry.png', this.startGame);
	},
	
	update: function(){
		
	},
	
	startGame: function(){
		this.game.state.start("play");	
	},
	
	mainMenu: function(){
		this.game.state.start("menu");
	}
	
};