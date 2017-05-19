"use strict";
window.SpaceMonsters.state.win = {
	preload: function(){
		
	},
	
	create: function(){
	this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/backpage.png');
	this.text = mt.create("you win");
	this.start = this.game.add.button(248, 328, '/play again.png', this.replay);
	},
	
	update: function(){
	},
	replay: function(){
	this.game.state.start("menu");
	}
};
		