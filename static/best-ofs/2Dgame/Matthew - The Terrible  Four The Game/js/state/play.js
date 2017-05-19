"use strict";
window.TheTerribleFourTheVideoGame.state.play = {
	preload: function(){
		console.log("loading play state");
		
		this.game.load.audio('bgm', 'audio/The GRAND Chase.wav');
		this.game.load.audio('granddad','audio/GRAND DAD.mp3');
	},
	
	create: function(){
		console.log("starting play state");
		this.background = this.game.add.tileSprite(0, 0, 3000, 800, '/Grassy.png');
		this.player = mt.create("Celine");
		this.blocks = mt.create("Blocks");
		this.coins = mt.create("Coin");
		this.coins.animations.add('idle', [0,1,2,3, 4]);
		this.coins.animations.play('idle', 10, true);
		this.realcoins = mt.create("Coins");
		
		this.triangles = mt.create("TRIANGLE");
		this.things = mt.create("Thing Badguys");
		
		this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		
		this.score = mt.create("Score");
		this.score_count = 0;
		
		this.text = mt.create("Text");
		
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();
		
		this.sac = mt.create("THE SAC");
		
		
	
	},
	
	update: function(){
		
		
		this.game.physics.arcade.collide(this.player, this.blocks);
	
		
		
		if(this.Lkey.isDown){
			this.player.body.velocity.x -= 5;
		}else if(this.Rkey.isDown){
			this.player.body.velocity.x += 5;
		}else if(this.player.body.touching.down){
			this.player.body.velocity.x = 0;
		}
		if(this.Ukey.isDown && this.player.body.touching.down){
			this.player.body.velocity.y -= 250;
		}
		
		this.game.camera.x = this.player.body.position.x-200;
		this.game.camera.y = this.player.body.position.y-150;
		this.score.position.x = this.game.camera.x;
		this.score.position.y = this.game.camera.y;
		
		this.background.position.x = this.game.camera.x*0.5;
		this.game.physics.arcade.collide(this.player, this.triangles, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.things, this.restartGame, null, this);
		
		if(this.triangles.body.position.y < 770 && this.triangles.body.position.y > 640){
		   this.triangles.body.velocity.y *= 1;
		} else if(this.triangles.body.position.y > 770) {
			this.triangles.body.velocity.y = -40;
		} else if(this.triangles.body.position.y < 640) {
			this.triangles.body.velocity.y = 40;
		}
		this.game.physics.arcade.collide(this.player, this.coins, this.destroyObject, null, this);
		this.game.physics.arcade.collide(this.player, this.realcoins, this.destroyObject2, null, this);
		this.game.physics.arcade.collide(this.player, this.sac, this.teleport, null, this);
		
	
	},
	restartGame: function() {
		this.bgm.stop();
		this.game.state.start("play");
	},
	destroyObject: function(player, coins){
		coins.destroy();
		this.score_count += 1;
		this.score.text = this.score_count;
	},
	destroyObject2: function(player, realcoins){
		realcoins.destroy();
		this.score_count += 1;
		this.score.text = this.score_count;
	},
	teleport: function(){
		this.player.body.position.x = 3808;
		this.player.body.position.y = 224.4642857142858;
		
	}
};