"use strict";
window.catrpiesadventure.state.menu = {
	preload: function(){
		
	},
	
	create: function(){
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/intro.png');
		this.start = this.game.add.button(260, 340, '/button.png', this.startGame);
	},
	
	update: function(){
		
	},
	
	startGame: function(){
		this.game.state.start("play");
	}
};