"use strict";
window.SpaceMonsters.state.lose = {
	preload: function(){
		
	},
	
	create: function(){
	this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/backpage.png');
	this.text = mt.create("you lose");
	this.start = this.game.add.button(248, 328, '/play again.png', this.replay);

	},
	
	update: function(){
	},

},
		Back: function(){
		this.game.state.start("menu");
		}
};