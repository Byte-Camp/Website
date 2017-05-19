"use strict";
window.jumpjumpfall.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Parish - Imminence.mp3');
		
	},
	
	create: function(){
		console.log("starting play state");
		
		this.bgm = this.game.add.audio('bgm' , 1, true);
		this.bgm.play();
		
	    this.bg = this.game.add.tileSprite(0, 0, 2000, 600, '/real house.png');
		this.player = mt.create("bear1");
		this.box = mt.create("platforms");
		this.enemy = mt.create("ghost");
		this.flashlight = mt.create("light1");
		this.score = mt.create("score");
		this.score_count = 0;
		this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	},
	
	
	update: function(){
		this.game.physics.arcade.collide(this.player, this.box);
		this.game.camera.x = this.player.body.position.x - 400;
		this.game.physics.arcade.collide(this.player, this.enemy, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.flashlight, this.pickup, null, this);
		this.score.position.x = this.game.camera. x+10;
		if(this.lkey.isDown){
			this.player.body.velocity.x -= 5;
		} else if (this.rkey.isDown){
			this.player.body.velocity.x +=5;
		} else if (this.player.body.touching.down){
				this.player.body.velocity.x = 0;	
		}
		if(this.ukey.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -150;
			
		}
		if(this.player.body.position.y > 650){
			this.restartGame();
			
		}
		
	},
	restartGame: function(){
		this.game.state.start("play");
		this.bgm.stop();
	},
	pickup:function(player, flashlight){
		flashlight.destroy();
		this.score_count += 1;
	this.score.text = this.score_count;
	}
};