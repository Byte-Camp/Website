"use strict";
window.Junglesurvival.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Synthetic Sinergy - Horizon.mp3');
	},
	
	create: function(){
		console.log("starting play state");
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();
		
		this.background = this.game.add.tileSprite(0, 0, 1800 , 800, '/background.png');
		this.cubes = mt.create("cubes");
		this.spikes = mt.create("spikes");
		this.Pear = mt.create("Pear");
		this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.hunter = mt.create("hunter21");
		this.coins = mt.create("coins");
		this.Rkey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.Lkey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.Ukey2 = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		
		this.score = mt.create("score");
		this.score_count = 0;
		
		this.timer = mt.create("timer");
		this.seconds = 30;
		this.timer_count = 0;
		this.lava = mt.create("lava");
		this.level2 = 0;
		
		
	},
	
	update: function(){
		
		this.timer_count += 1;
		if(this.timer_count == 60){
			this.seconds -= 1;
			this.timer.text = this.seconds;
			this.timer_count = 0;
		}
		
		this.game.physics.arcade.collide(this.Pear, this.cubes);
		this.game.physics.arcade.collide(this.hunter, this.cubes);
		
		if(this.Lkey2.isDown){
			this.hunter.body.velocity.x -= 10;}
		 else if(this.Rkey2.isDown){
			this.hunter.body.velocity.x += 10;
		}else if(this.hunter.body.touching.down){
			this.hunter.body.velocity.x = 0;
		}
		if(this.Ukey2.isDown && this.hunter.body.touching.down){
			this.hunter.body.velocity.y -= 270;
		}
		
		if(this.Lkey.isDown){
			this.Pear.body.velocity.x -= 10;}
		 else if(this.Rkey.isDown){
			this.Pear.body.velocity.x += 10;
		}else if(this.Pear.body.touching.down){
			this.Pear.body.velocity.x = 0;
		}
		if(this.Ukey.isDown && this.Pear.body.touching.down){
			this.Pear.body.velocity.y -= 270;
		}
		
		if(this.seconds == 0 && this.level2 == 0){
			this.level2 = 1;
			this.Pear.body.position.y = 625;
			this.Pear.body.position.x = 1856;
			this.hunter.body.position.y = 450;
			this.hunter.body.position.x = 3456;
			this.seconds = 30;
			this.timer.text = this.seconds;
			this.game.camera.x = 1800;
		}else if(this.seconds == 0 && this.level2 == 1){
			this.game.state.start("win");
		}
		
		this.score.position.x = this.game.camera.x + 1700;
		this.timer.position.x = this.game.camera.x + 50;
		this.game.physics.arcade.collide(this.Pear, this.spikes, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.Pear, this.coins, this.destroyobject, null, this);
		this.game.physics.arcade.collide(this.Pear, this.hunter, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.Pear, this.lava, this.teleport, null, this);
	},
	
	restartGame: function() {
		this.game.state.start("play");
	},
	destroyobject: function(player, coin){
		this.score_count+= 1;
		this.score.text = this.score_count;
		coin.destroy();
	},
	teleport: function() {
		this.Pear.body.position.y = 625;
		this.Pear.body.position.x =  1856;
		this.hunter.body.position.y =  450;
		this.hunter.body.position.x = 3552;
	}
};