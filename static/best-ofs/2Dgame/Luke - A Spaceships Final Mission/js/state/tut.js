"use strict";
window.Aspaceshipsfinalmission.state.tut = {
	preload: function(){
		this.game.load.audio('effect', 'audio/Glass Break 01.wav');
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/tutorial.png');
		this.button = this.game.add.button(0, 0, '/back.png', this.menu);
	},
	
	update: function(){
		
	},
	menu: function(){
		this.effect = this.game.add.audio ('effect', 1, false);
		this.effect.play();
		this.game.state.start("menu");
	}
};