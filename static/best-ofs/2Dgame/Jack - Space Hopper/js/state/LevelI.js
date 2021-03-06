"use strict";
window.SpacehopperI.state.LevelI = {
	preload: function(){
		console.log("loading LevelI state");
		this.game.load.audio('music', 'Robot Duck - Onkerlings.mp3');
	},
	
	create: function(){
		console.log("starting LevelI state");
		
		this.music = this.game.add.audio('music');
		this.music.play();
		
		this.RABF06 = mt.create("Doom line");
		this.RABF05 = this.game.add.tileSprite(0, 0, 800, 480, '/Epic Background.png');
		this.RABF04 = mt.create("Grounds");
		this.RABF03 = mt.create("SDSes");
		this.RABF02 = mt.create("SpaceEx ship");
		this.RABF01 = mt.create("SpaceEx employee 719F");
		
		this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	    this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		
		
		
	},
	
	update: function(){
		this.game.physics.arcade.collide(this.RABF01, this.RABF04);
		this.game.physics.arcade.collide(this.RABF02, this.RABF01, this.Win, null, this);
		
		this.game.physics.arcade.collide(this.RABF01, this.RABF03, this.Lose, null, this);
		this.game.physics.arcade.collide(this.RABF01, this.RABF06, this.Lose, null, this);
		
		if(this.Lkey.isDown) {
			this.RABF01.body.velocity.x = -150;
		}else if(this.Rkey.isDown) {
			this.RABF01.body.velocity.x = 150;
		}else if(this.RABF01.body.touching.down){
		   this.RABF01.body.velocity.x = 0;
		}
	
		if(this.Ukey.isDown && this.RABF01.body.touching.down){
	    	this.RABF01.body.velocity.y = -350;
    	}
		
	},
	
	Lose: function(){
		this.music.stop();
		this.game.state.start("LevelI");
	},
	
	Win: function(){
		this.game.state.start("LevelII");
	}
	//destroyObject: function(ship, player){
		//player.body.position.x = 41.y = -5;
	//}

};