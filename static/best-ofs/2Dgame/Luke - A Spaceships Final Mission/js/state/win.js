"use strict";
window.Aspaceshipsfinalmission.state.win  = {
	preload: function(){
		this.game.load.audio('effect', 'audio/Glass Break 01.wav');
		
	},
	
	create: function(){
		// you can create menu group in map editor and load it like this:
		// mt.create("menu");
		this.screen = mt.create("win");
		
		this.resetkey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	
	update: function(){
		this.screen.body.position.x = this.game.camera.x;
		this.screen.body.position.y = this.game.camera.y;
		if(this.resetkey.isDown){
			this.restartGame();
		}
		
	},
	restartGame: function(){
		this.effect = this.game.add.audio ('effect', 1, false);
		this.effect.play();
	    this.game.state.start("menu");
    }
};