"use strict";
window.SpaceMonsters.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Kajet - Train Hijack Hero.mp3');
		
	},
	
	create: function(){
		console.log("starting play state");
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/outerspace.png');
		this.player = mt.create("Alien Ship");
		this.enemy = mt.create("Space Alien");
	    this.enemy2 = mt.create("Space Alien2");
		this.enemy3 = mt.create("Space Alien1");
		this.projectile = mt.create("Projectile");
		this.object = mt.create("crate");
		this.score = mt.create("score");
		this.health = mt.create("HP");
		this.addition = mt.create("hp");
		this.addition2 = mt.create("Score");
		this.counter2 = 10;
		this.counter = 0;
	    this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.skey = this.game.input.mousePointer;
	
	},
	
	update: function(){
		this.game.physics.arcade.collide(this.player, this.enemy, this.LoseHealth, null, this);
		this.game.physics.arcade.collide(this.player, this.enemy2, this.LoseHealth, null, this);
		this.game.physics.arcade.collide(this.player, this.enemy3, this.LoseHealth, null, this);
		this.game.physics.arcade.collide(this.projectile, this.enemy3, this.destroyenemy, null, this);
	    this.game.physics.arcade.collide(this.projectile, this.enemy2, this.destroyenemy, null, this);
		this.game.physics.arcade.collide(this.projectile, this.enemy, this.destroyenemy, null, this);
		this.game.physics.arcade.collide(this.player, this.object, this.powerup, null, this);
		if(this.counter2 <= 0){
			this.bgm.stop();
			this.game.state.start("lose");
		}
		if(this.counter >= 30){
			this.bgm.stop();
			this.game.state.start("win");
	    }
		if(this.lkey.isDown){
			this.player.body.velocity.x -= 5;
		} else if (this.rkey.isDown){
			this.player.body.velocity.x += 5;
		}
		
		if(this.skey.isDown){
			this.projectile.body.velocity.x = 1000;
		} else if(this.projectile.body.velocity.x == 0){
			this.projectile.body.position.x = this.player.body.position.x+41;
			this.projectile.body.position.y = this.player.body.position.y+9;
		} else if(this.projectile.body.position.x > 800){
			this.projectile.body.velocity.x = 0;
		}
		
		if(this.ukey.isDown){
            this.player.body.velocity.y = -200;
		}
		if(this.player.body.position.y >650){
		  this.restartGame();
		}
		if(this.player.body.position.x <-100){
			this.restartGame();
		}
		if(this.player.body.position.y <-100){
			this.restartGame();
		}
		if(this.player.body.position.x >900){
			this.restartGame();
		}
		if(this.enemy.body.position.x < -127){
			this.enemy.body.position.x = Math.random()*600+800;
			this.enemy.body.position.y = this.player.body.position.y;
			this.enemy.body.velocity.x = 0;
		}
		if(this.enemy2.body.position.x < -127){
			this.enemy2.body.position.x = Math.random()*600+800;
			this.enemy2.body.position.y = Math.random()*490+10;
			this.enemy2.body.velocity.x = 0;
		}
		if(this.enemy3.body.position.x < -127){
			this.enemy3.body.position.x = Math.random()*600+800;
			this.enemy3.body.position.y = Math.random()*490+10;
		this.enemy3.body.velocity.x = 0;
		}
		if(this.object.body.position.x < -100){
			this.object.body.position.x = 2000;
			this.object.body.position.y = Math.random()*300+10;
			this.object.body.velocity.x = 25;
		}	
	},
		 restartGame: function(){
	 	this.game.state.start("play");
		 },
	destroyenemy: function(projectile, enemy){
		enemy.body.position.x = Math.random()*600+800;
		this.projectile.body.velocity.x = 0;
		this.projectile.body.position.x = this.player.body.position.x+41;
	    this.projectile.body.position.y = this.player.body.position.y+9;
		this.counter += 1;
		this.score.text = this.counter;
	},
	
	powerup: function(player, object){
		this.object.body.position.x = Math.random()*1400+800;
		this.object.body.position.y = Math.random()*500;
		this.counter += 5;
		this.score.text = this.counter;
		this.player.body.velocity.x = 0;
		this.object.body.velocity.x = 0;
		this.object.body.velocity.y = 0;
	},
	LoseHealth: function(player, enemy){
		this.counter2 -= 1;
		this.health.text = this.counter2;
		enemy.body.position.x = Math.random()*600+800;
		enemy.body.velocity.x = 0;
		enemy.body.velocity.y = 0;
		this.player.body.velocity.x = 0;
		
	}

	
	
};