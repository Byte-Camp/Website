"use strict";
window.SpaceMonsters.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/Menu.png');
		this.start = this.game.add.button(345, 301, '/Start.png', this.startGame);
		this.start = this.game.add.button(345, 328, '/instr.png', this.instructions);
	},
	
	update: function(){
		
	},
	
	startGame: function(){
		this.game.state.start("play");
	},
	instructions: function(){
		this.game.state.start("instr");
	}
};