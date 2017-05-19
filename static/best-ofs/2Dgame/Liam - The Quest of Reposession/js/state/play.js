"use strict";
window.TheQuestofReposession.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Kevin McLoed - Plucky Daisy.mp3');
	},
	
	create: function(){
		console.log("starting play state");
		
		this.bgm = this.game.add.audio('bgm', 1, true);
		this.bgm.play();
		
		this.bg = this.game.add.tileSprite(0, 0, 3000, 600, "/Forrest background.png");
		this.door = mt.create ("Door");
		this.enemy = mt.create ("THIEF");
		this.cubes = mt.create ("Cubes");
		this.bcave = mt.create ("Cave background");
		this.tip = mt.create ("Tip");
		this.coin = mt.create ("COIN");
		this.door1 = mt.create ("DOOR1");
		this.player = mt.create ("RUPERT");
		this.rock = mt.create ("Rock");
		this.rock1 = mt.create ("Rock1");
		this.rock2 = mt.create ("Rock2");
		this.cave = mt.create ("Cave");
		this.scoretitle = mt.create ("Score");
		this.numscore = mt.create ("NumScore");
		this.score_count = 0;
		
		this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		
	},
	
	update: function(){
		
		this.game.physics.arcade.collide(this.player, this.cubes);
		this.game.physics.arcade.collide(this.player, this.door1);
		this.game.camera.x = this.player.body.position.x - 400;
		this.game.physics.arcade.collide(this.player, this.coin, this.collect, null, this);
		//background movement (below)
		this.bg.position.x = this.game.camera.x*0.5;
		this.numscore.position.x = this.game.camera.x+100;
		this.scoretitle.position.x = this.game.camera.x+10;
		
		this.game.physics.arcade.collide(this.player, this.enemy, this.restartGame,null, this);
		this.game.physics.arcade.collide(this.player, this.rock, this.restartGame,null, this);
		this.game.physics.arcade.collide(this.player, this.rock1, this.restartGame,null, this);
		this.game.physics.arcade.collide(this.player, this.rock2, this.restartGame,null, this);

		
		
		
		if(this.rock.body.position.y > 600){
			this.rock.body.position.y = -100;
			this.rock.body.velocity.y = 0;
		}
		
		if(this.rock1.body.position.y > 600){
			this.rock1.body.position.y = -100;
			this.rock1.body.velocity.y = 0;
		}
		
		if(this.rock2.body.position.y > 600){
			this.rock2.body.position.y = -100;
			this.rock2.body.velocity.y = 0;
		}
		
		if(this.lkey.isDown){
			this.player.body.velocity.x -= 5;
		} else if(this.rkey.isDown){
			this.player.body.velocity.x += 5;
		} else if(this.player.body.touching.down){
			this.player.body.velocity.x = 0;
		}
		
		if(this.ukey.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -500;
		}
		if(this.player.body.position.y > 650){
			this.restartGame();
		}
		if(this.score_count == 4){
			this.bgm.stop();
			this.game.state.start("win");
		}

		
	},
	
	restartGame: function(){
		this.bgm.stop();
		this.game.state.start("play");
	},
	
	collect: function(player, coin){
		coin.destroy();
		this.score_count += 1;
		this.numscore.text = this.score_count;
	}

};

	