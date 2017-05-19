"use strict";
window.Aspaceshipsfinalmission.state.menu = {
	preload: function(){
		this.game.load.audio('effect', 'audio/Glass Break 01.wav');
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/menu.png');
		this.button = this.game.add.button(288, 224, '/play.png', this.startGame);
		this.tutbutton = this.game.add.button(224, 384, '/tutorail.png', this.tutorial);
		
		//this.effect = this.game.add.audio('effect');
		//this.effect.allowMutliple = true;
	},
	
	update: function(){
		
	},
	startGame: function(){
		this.effect = this.game.add.audio ('effect', 1, false);
		this.effect.play();
		this.game.state.start("play");
	},
	tutorial: function(){
		this.effect = this.game.add.audio ('effect', 1, false);
		this.effect.play();
		this.game.state.start("tut");
	}
};