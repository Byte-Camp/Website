"use strict";
window.catrpiesadventure.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/sorohanro - amazon groove.mp3');
	},
	
	create: function(){
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();
		console.log("starting play state");
		this.bg = this.game.add.tileSprite(0, 0, 2000, 600, '/forest.png');
		this.player = mt.create("catrpie");
		this.block = mt.create("blocks");
		this.wubunub = mt.create("pickups");
		this.garbulbs = mt.create("enimies");
		this.score = mt.create("score");
		this.counter = 0;
		
		this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
	},
	
	update: function(){
		 this.game.physics.arcade.collide(this.player, this.block);
		 this.game.physics.arcade.collide(this.player, this.wubunub, this.collect, null, this);
		 this.game.physics.arcade.collide(this.player, this.garbulbs, this.restartGame, null, this);
		 this.game.camera.x = this.player.body.position.x -400;
		 this.score.position.x = this.camera.x;
		
		if(this.lkey.isDown){	
			this.player.body.velocity.x -= 5;
		} else if(this.rkey.isDown){
			this.player.body.velocity.x += 5;
		} else if(this.player.body.touching.down){
		    this.player.body.velocity.x = 0;
		} 
		if(this.ukey.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -400;
						
		}
		
		if(this.counter == 10){
			this.game.state.start("outro");
		}
	},
	collect: function(player, wubunub){
		wubunub.destroy();
		this.counter += 1;
		this.score.text = this.counter;
	},
	
	restartGame: function(player, garbulb){
		if(garbulb.body.touching.up){
		    garbulb.destroy();
		} else {
	  	    this.game.state.start("play");
			
			this.bgm.stop(); 
		}
	},
    
};