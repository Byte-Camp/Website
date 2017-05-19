"use strict";
window.seachiken.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'Synthetic Sinergy - Horizon.mp3');
	},
	
	create: function(){
		console.log("starting play state");
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();	
			
		this.backround = this.game.add.tileSprite(0, 0, 10000, 10000, '/backround.png');
		this.points = mt.create("points");
		this.player = mt.create("balkers");
		this.seaweed = mt.create("seaweed");
		this.counter = mt.create("counter");
		this.count = 0;
		
		this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	},
	
	update: function(){
		
		this.game.physics.arcade.collide(this.player, this.seaweed, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.points, this.destroyItem, null, this);
		
		this.game.camera.x = this.player.position.x - 400;
		this.game.camera.y = this.player.position.x - 240;
		this.counter.position.x = this.camera.position.x - 400;
		this.counter.position.y = this.camera.position.y - 240;
		
		if(this.Ukey.isDown){
			this.player.body.velocity.y = -100;
		}
		
		
	},
	
	restartGame: function(){
		this.bgm.stop();
		this.game.state.start("play");
	},
	
	destroyItem: function(player, coin){
		this.count += 1;
		this.counter.text = this.count;
		coin.destroy();
	},
	
	
};