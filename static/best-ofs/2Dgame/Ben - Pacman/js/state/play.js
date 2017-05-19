"use strict";
window.Pacman.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Danger hero.mp3');
	},
	
	create: function(){
		console.log("starting play state");
		this.player = mt.create("Pacman");
		this.bghost = mt.create("BGhost");
		this.rghost = mt.create("RGhost");
		this.yghost = mt.create("YGhost");
        this.pghost = mt.create("PGhost");
		this.pellet = mt.create("pellets");
		this.blocks = mt.create("wall");
		this.score = mt.create("points");
		this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	    this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.dkey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		this.score_count = 0;
		this.bgm = this.game.add.audio('bgm', 0.9, true);
		this.bgm.play();
	},
	update: function(){
		this.game.physics.arcade.collide(this.player, this.blocks);
		this.game.physics.arcade.collide(this.player, this.bghost);
		this.game.physics.arcade.collide(this.player, this.rghost);
		this.game.physics.arcade.collide(this.player, this.yghost);
		this.game.physics.arcade.collide(this.player, this.pghost);
		
		this.game.physics.arcade.collide(this.blocks, this.rghost);
		this.game.physics.arcade.collide(this.blocks, this.bghost);
		this.game.physics.arcade.collide(this.blocks, this.yghost);
		this.game.physics.arcade.collide(this.blocks, this.pghost);
		
		this.game.physics.arcade.collide(this.player, this.pellet, this.pickup, null, this);
		this.game.physics.arcade.collide(this.player, this.rghost, this.destroy, null, this);
		this.game.physics.arcade.collide(this.player, this.bghost, this.destroy, null, this);
		this.game.physics.arcade.collide(this.player, this.yghost, this.destroy, null, this);
		this.game.physics.arcade.collide(this.player, this.pghost, this.destroy, null, this);
		
		if(this.lkey.isDown) {
			this.player.body.velocity.x -= 5;
		} else if(this.rkey.isDown) {
			this.player.body.velocity.x += 5;
		} else if(this.ukey.isDown){
			this.player.body.velocity.y -= 5;
		} else if(this.dkey.isDown) {
			this.player.body.velocity.y += 5;
		} else {
	        this.player.body.velocity.x =0;
			this.player.body.velocity.y =0;
		}
		this.score.text = "Score:" + this.score_count;
	},
	pickup: function(player, YellowDot){
		this.score_count += 1;
		YellowDot.destroy();
	},
	destroy: function(){
	this.bgm.stop();
	this.game.state.start("play");
	}
};