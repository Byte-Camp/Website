"use strict";
window.DiepioSmashersConquest.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', "audio/Hades - Jack's Lantern.mp3");
	},
	
	create: function(){
		console.log("starting play state");
		this.player = mt.create("Smasher");
		this.enemy = mt.create("Enemies");
		this.square = mt.create("Squares");
		this.spawn = mt.create("Killable enemies");
		this.factory = mt.create("Overlord");
		this.bomb = mt.createGroup("Vertical Projectiles");
		this.last = mt.create("Boss");
		this.text = mt.create("Text");
		this.instruction = mt.create("Text1");
		this.instruction2 = mt.create("Text2");
		this.warning = mt.create("Text3");
		this.lore = mt.create("story");
		this.wall = mt.create("wall");
		this.winmessage = mt.create("WinText");
		this.winpic = mt.create("Victorious smasher");
		this.exit = mt.create("Win door");
		this.score = mt.create("Points");
		this.score_count = 0;
		
		this.bullets = mt.create("Bullets");
		this.wall1 = mt.create("wall1");
		
		
		this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.dkey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		this.skey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		this.bgm = this.game.add.audio('bgm', 1, true);
		this.bgm.play();
	},
	
	update: function(){
		this.game.physics.arcade.collide(this.player, this.square, this.pickup, null, this);
		this.game.physics.arcade.collide(this.player, this.enemy, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.bomb, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.bullets, this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.wall);
		this.game.physics.arcade.collide(this.player, this.exit, this.victory, null, this);
		this.game.physics.arcade.collide(this.player, this.spawn, this.kill, null, this);
		this.game.physics.arcade.collide(this.player,this.factory, this.defeat, null, this);
		this.game.physics.arcade.collide(this.player,this.last, this.eliminate, null, this);
		
		
		this.game.physics.arcade.collide(this.bullets, this.wall1);
		this.game.physics.arcade.collide(this.bullets, this.last);
		
		
		this.game.camera.x = this.player.body.position.x - 300;
		this.game.camera.y = this.player.body.position.y - 300;
		this.score.position.x = this.game.camera.x;
		this.score.position.y = this.game.camera.y;
		
// 		if(this.bomb.body.position.y > 1000) { 
// 			this.bomb.body.position.y = 90;
// 		}
		
		if(this.lkey.isDown) {	
			this.player.body.velocity.x -=5;
		} else if(this.rkey.isDown) {
			this.player.body.velocity.x +=5;
		} else {
			this.player.body.velocity.x = 0;
	    }
		if(this.ukey.isDown){
			this.player.body.velocity.y = -300;
		} else if(this.dkey.isDown){
			this.player.body.velocity.y = 300;
		} else {
			this.player.body.velocity.y = 0;
			
		}
		
		
		
	},
	pickup: function(player, Squares){
		Squares.destroy();
		this.score_count +=1;
		this.score.text = "Points: " + this.score_count;
	},
	restartGame: function(){
		this.bgm.stop();
		this.game.state.start("play");
	},
	victory:function(){
		this.game.state.start("win");
	},
	kill:function(player, spawn){
		if(this.skey.isDown && player.body.position.x <3830 && player.body.position.x >3780){
			spawn.destroy();
			player.body.position.x = 2773.6667;
			player.body.position.y = 557.7778;
			this.score_count +=10;
			this.score.text = "Points: " + this.score_count;
		}

	},

	defeat:function(player, factory){
		if(this.skey.isDown && player.body.position.x <5973.75 && player.body.position.x >5900){
			factory.destroy();
			this.score_count +=20;
			this.score.text = "Points: " + this.score_count;
		}
	},
 	eliminate:function(player, last){
 		if(this.skey.isDown && player.body.position.x <10060 && player.body.position.x >9990){
			last.destroy();
			player.body.position.x = 7245.6667;
			player.body.position.y = 240.4444;
			this.score_count +=300;
			this.score.text = "Points: " + this.score_count;
		}
	}
};