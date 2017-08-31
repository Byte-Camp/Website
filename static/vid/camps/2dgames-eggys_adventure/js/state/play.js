"use strict";
window.EggysAdventure.state.play = {
	preload: function(){
		console.log("loading play state");
		
		this.game.load.audio('bgm', 'audio/Travelling to Amarillo-Variation C.mp3');
		
	},
	
	create: function(){
		console.log("starting play state");
		
		this.bgm = this.game.add.audio('bgm', 0.9, true);
		this.bgm.play();
		
		this.bd = this.game.add.tileSprite(0, 0, 1600, 1500, '/Backdrop.png');
		this.player = mt.create("Eggy");
		this.player.animations.add('idle', [0]);
		this.player.animations.add('jump', [6, 0]);
		this.player.animations.add('walk', [1, 2, 3, 4, 5]);
		
		this.blocks = mt.create("Blocks");
		this.pickups = mt.create("Pickups");
		this.badstuff = mt.create("Bad Stuff");
		
		this.score = mt.create("Score");
		this.score_count = 0;
		
		this.lives = mt.create("Lives");
		this.life_count = 5;
		this.lives_count = 5;

		
		this.leftkey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.akey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

		this.rightkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.dkey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		
		this.upkey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.wkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);

	},
	
	update: function(){
		this.game.camera.x = this.player.body.position.x - 350;
		this.game.camera.y = this.player.body.position.y - 350;
		this.bd.position.x = this.game.camera.x - 20;
		this.score.position.x = this.game.camera.x;
		this.score.position.y = this.game.camera.y;
		this.lives.position.x = this.game.camera.x + 200;
		this.lives.position.y = this.game.camera.y;
		
		if(!(this.leftkey.isDown || this.akey.isDown || this.rightkey.isDown || this.dkey.isDown || this.upkey.isDown || this.wkey.isDown)){
			this.player.animations.play('idle', 1, false);
		}
		
		this.game.physics.arcade.collide(this.player, this.blocks);
		this.game.physics.arcade.collide(this.player, this.pickups, this.pickup, null, this);
		this.game.physics.arcade.collide(this.player, this.badstuff, this.restartGame, null, this);
		if(this.player.body.velocity.x > 350){
			this.player.body.velocity.x = 350;
		}
		if(this.player.body.velocity.y > 600){
			this.player.body.velocity.y = 600;
		}
		if(this.player.body.velocity.x < -350){
			this.player.body.velocity.x = -350;
		}
		if(this.player.body.velocity.y < -600){
			this.player.body.velocity.y = -600;
		}
		if(this.leftkey.isDown || this.akey.isDown){
			this.player.body.velocity.x -= 5;
			this.player.scale.x = -1;
			this.player.animations.play('walk', 8, false);
			
		} else if(this.rightkey.isDown || this.dkey.isDown){
			this.player.body.velocity.x += 5;
			this.player.animations.play('walk', 8, false);
			this.player.scale.x = 1;
		} else {
			this.player.body.velocity.x *= 0.93;
			
		}
		//jump
		
		if((this.upkey.isDown || this.wkey.isDown) && this.player.body.touching.down){
			this.player.body.velocity.y = -450;
			this.player.animations.play('jump', 1.5, false);
		}
		if(this.player.body.position.y > 1300){
			this.restartGame();
		}
		if (this.life_count < 1) {
			this.bgm.stop();
			this.game.state.start("lose");
		}
		
		if (this.score_count >= 4000){
			this.bgm.stop();
			this.game.state.start("win");
		}
		
	},
	
	pickup: function(player, pickup){
		this.score_count += 100;
		this.score.text = "Score: " + this.score_count;
		pickup.destroy();
	
	},
	
	restartGame: function(){
		this.player.body.position.x = 50;
		this.player.body.position.y = 900;
		this.player.body.velocity.x = 0;
		this.pickups.destroy();
		this.pickups = mt.create("Pickups");
		this.badstuff.destroy();
		this.badstuff = mt.create("Bad Stuff");
		this.score_count = 0;
		this.life_count -= 1;
		this.score.text = "Score: " + this.score_count;
		
		this.lives.text = "Lives: " + this.life_count;
	}
};