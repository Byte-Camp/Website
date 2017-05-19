"use strict";
window.GETBACKTOANTARCTICA.state.play = {
	preload: function(){
		console.log("loading play state");
	},
	
	create: function(){
		console.log("starting play state");
		this.background = this.game.add.tileSprite(0, 0, 5000, 800, '/background.png');
		this.player = mt.create("Player");
		this.Block = mt.create("Blocks");
		this.Spike = mt.create("Spikes");
		this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.Coin = mt.create("Coins");
		this.score = mt.create("Score");
		this.score_count = 0;
		
		this.win = mt.create("Win coin");
		
	},
	
	update: function(){
		this.game.physics.arcade.collide(this.player, this.Block);
		
		if(this.Lkey.isDown){
			this.player.body.velocity.x -= 5;
		}else if(this.Rkey.isDown){
			this.player.body.velocity.x += 5;
		}else if(this.player.body.touching.down){
			this.player.body.velocity.x *= 0.9;
		}
		
		if(this.Ukey.isDown && this.player.body.touching.down){
			this.player.body.velocity.y -= 160;
		}
		
		this.game.camera.x = this.player.body.position.x-400;
		this.game.camera.y = this.player.body.position.y-270;
		this.score.position.x = this.game.camera.x;
		this.score.position.y = this.game.camera.y;
		
	
		this.game.physics.arcade.collide(this.player, this.Spike, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.Coin, this.destroyObject, null, this);
		this.game.physics.arcade.collide(this.player, this.win, this.winscreen, null, this);
		
	},
	
	restartGame: function() {
		this.game.state.start("play");
	},
	
	destroyObject:function(player, Coin) {
		this.score_count += 1;
		this.score.text = this.score_count;
		Coin.destroy();
    },
	winscreen:function(){
		this.game.state.start("win");
	}
	

	
	
	
	
};