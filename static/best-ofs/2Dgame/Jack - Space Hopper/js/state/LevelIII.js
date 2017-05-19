"use strict";
window.SpacehopperI.state.LevelIII = {
	preload: function(){
		console.log("loading LevelIII state");
		this.game.load.audio('music', 'Robot Duck - Onkerlings.mp3');
	},
	
	create: function(){
		console.log("starting LevelIII state");
		
		this.music = this.game.add.audio('music');
		this.music.play();
		
		this.RABF06 = mt.create("Doom line");
		this.RABF05 = this.game.add.tileSprite(0, 0, 800, 480, '/Epic Background.png');
		this.RABF12 = mt.create("Grounds III");
		this.RABF11 = mt.create("SDSes III");
		this.RABF10 = mt.create("SpaceEx ship III");
		this.RABF01 = mt.create("SpaceEx employee 719F");
		
		this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	    this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		
		
		
	},
	
	update: function(){
		this.game.physics.arcade.collide(this.RABF01, this.RABF12);
		this.game.physics.arcade.collide(this.RABF10, this.RABF01, this.VICTORY, null, this);
		
		this.game.physics.arcade.collide(this.RABF01, this.RABF11, this.Lose, null, this);
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
	
	destroyObject: function(ship, player){
		player.body.position.x = 1000;
	},
	
	VICTORY: function(){
		this.music.stop();
		this.game.state.start("win");
		
	}

};