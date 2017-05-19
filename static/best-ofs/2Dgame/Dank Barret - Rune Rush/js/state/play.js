"use strict";
window.RuneRush.state.play = {
	preload: function(){
		console.log("loading play state");
		//backgrounds
		this.overworldbg = this.game.add.tileSprite(0, 0, 10000, 600, '/overworldBack.png');
		
		
		//mounts
		this.player = mt.create("player");
		this.zombie = mt.create("zombieGroup");
		this.skeleton = mt.create("skeletonGroup");
		this.grass = mt.create("grassGroup");
		this.rock = mt.create("rockGroup");
		//this.redrock = mt.create("redrockGroup");
		this.water = mt.create("waterGroup");
		this.lava = mt.create("lavaGroup");
		this.rune = mt.create("runeGroup");
		this.windBlade = mt.create("windBlade");
		this.giantsBroadsword = mt.create("giantsBroadsword");
		this.magneticMaul = mt.create("magneticMaul");
		this.hyperAxe = mt.create("hyperAxe");
		this.alligatorsTooth = mt.create("alligatorsTooth");
		this.guiRune = mt.create("scorerune");
		//this.chest = mt.create("chest");
		this.ironWizard = mt.create("ironWizard");
		//score
		this.scoreboard = mt.create("scoreboard");
		this.score = 0;
		//power ups
		this.legendary = Math.random()*4;
		//this.legendary =4;
		this.legendary = Math.round(this.legendary);
		console.log(this.legendary);
		//powerups
		
		
		
		
							  
	},
	
	create: function(){
		console.log("starting play state");
	this.leftmove=this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	this.rightmove=this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	this.upmove=this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
	this.downmove=this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		
		
		
		
		
		
		
	},
	
	update: function(){
		//camera
		this.game.camera.follow(this.player);
		this.scoreboard.position.x = this.game.camera.x + 50;
		this.scoreboard.position.y = this.game.camera.y + 20;
		this.guiRune.position.x = this.game.camera.x + 70;
		this.guiRune.position.y = this.game.camera.y + 10;
		//legendaries
		if(this.legendary===0){
			this.giantsBroadsword.body.position.x = this.player.body.position.x + 35;
			this.giantsBroadsword.body.position.y = this.player.body.position.y;
		}
		else if(this.legendary==1){
			this.windBlade.body.position.x = this.player.body.position.x + 35;
			this.windBlade.body.position.y = this.player.body.position.y;
		}
		else if(this.legendary==2){
			this.alligatorsTooth.body.position.x = this.player.body.position.x + 35;
			this.alligatorsTooth.body.position.y = this.player.body.position.y;
		}
		else if(this.legendary==3){
			this.magneticMaul.body.position.x = this.player.body.position.x + 20;
			this.magneticMaul.body.position.y = this.player.body.position.y - 200;
		}
		else if(this.legendary==4){
			this.hyperAxe.body.position.x = this.player.body.position.x + 30;
			this.hyperAxe.body.position.y = this.player.body.position.y;
		}
		
		
		//physics
		this.game.physics.arcade.collide(this.player, this.grass, null, null, this);
		this.game.physics.arcade.collide(this.zombie, this.grass, null, null, this);
		this.game.physics.arcade.collide(this.skeleton, this.grass, null, null, this);
		this.game.physics.arcade.collide(this.player, this.zombie, this.gamerestart, null, this);
		this.game.physics.arcade.collide(this.player, this.skeleton, this.gamerestart, null, this);
		this.game.physics.arcade.collide(this.player, this.lava, this.gamerestart, null, this);
		this.game.physics.arcade.collide(this.player, this.rune, this.addscore, null, this);
		this.game.physics.arcade.collide(this.ironWizard, this.grass, null, null, this);
		//legendaries
		this.game.physics.arcade.collide(this.giantsBroadsword, this.ironWizard, this.killEnemy, null, this);
		this.game.physics.arcade.collide(this.windBlade, this.ironWizard, this.killEnemy, null, this);
		this.game.physics.arcade.collide(this.alligatorsTooth, this.ironWizard, this.killEnemy, null, this);
		this.game.physics.arcade.collide(this.magneticMaul, this.ironWizard, this.killEnemy, null, this);
		this.game.physics.arcade.collide(this.hyperAxe, this.ironWizard, this.killEnemy, null, this);
		this.game.physics.arcade.collide(this.player, this.rock, this.gamerestart, null, this);
		
		
		this.game.physics.arcade.collide(this.giantsBroadsword, this.zombie, this.killEnemy, null, this);
		this.game.physics.arcade.collide(this.magneticMaul, this.rune, this.addscore, null, this);
		
		if(this.legendary == 2){
		this.game.physics.arcade.collide(this.player, this.water, null, null, this);
		}

			
		
	
		
		
		
		
		
		//controls
		if(this.leftmove.isDown){
			this.player.body.velocity.x = -300;}
		else if(this.rightmove.isDown){
			this.player.body.velocity.x = 300;}
		else if(this.downmove.isDown && this.legendary == 4){
			this.player.body.velocity.x = 600;
		}
		else if(this.downmove.isDown && this.legendary == 1){
			this.player.body.velocity.y = -100;
		}
		else{
			this.player.body.velocity.x = 0;
		}
		if(this.upmove.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -280;}
		//void death
		if(this.player.body.position.y >= 700){
			this.game.state.start("play");}
		//rockdeath
		//if(this.rock.body.position.y > 700){
			//this.rock.body.position.y = 100;
		//}
			
		
		
		
		
	},
	gamerestart:function(){
				this.game.state.start("gameOver");
				
			},
	addscore: function(player,rune){
		this.score = this.score + 1;
		this.scoreboard.text = this.score;
		rune.destroy();
		},

	killEnemy:function(broadsword,enemy){
		enemy.destroy();
},
	
	

};