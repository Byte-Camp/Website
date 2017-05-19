"use strict";
window.Aspaceshipsfinalmission.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Synthetic Sinergy - Horizon.mp3');
		this.game.load.audio('death', 'audio/Wilhelm Scream.wav');
		this.game.load.audio('win', 'audio/Large Crowd Applause 01.wav');
	},
	
	create: function(){
		console.log("starting play state");
		console.log("good job you found an easter egg!");
		
		//music
		this.bgm = this.game.add.audio ('bgm', 1, true);
		this.bgm.play();
		
		//Background
		this.bg = this.game.add.tileSprite(0, 0, 1200, 600, '/Background.png');
		
		//objects
		this.ship = mt.create("ship");
		this.enemy = mt.create("asteroid");
		this.matter = mt.create("Dark Matter");
		this.matter.animations.add('float', [0,1,2,3,4,5,6,7]);
		this.matter.animations.play('float', 4, true);
		this.matter1 = mt.create("Dark Matter1");
		this.matter1.animations.add('float', [0,1,2,3,4,5,6,7]);
		this.matter1.animations.play('float', 4, true);
		this.matter2 = mt.create("Dark Matter2");
		this.matter2.animations.add('float', [0,1,2,3,4,5,6,7]);
		this.matter2.animations.play('float', 4, true);
		
		//Keys
		this.upkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.dwkey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
		this.resetkey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		//score
		this.score = mt.create("Score");
		this.score_count = 0;
		
		//heath
		this.health = mt.create("Health");
		this.health_count = 3;
	},
	
	update: function(){
		//Death
		if(this.health_count == 0){
			this.endGame();
		}
		
		//Reset
		if(this.resetkey.isDown){
			this.restartGame();
		}
		
		//win condition
		if(this.score_count == 3){
			this.winGame();
		}
		
		//movement
		this.ship.body.velocity.x = 100;
		
		if(this.upkey.isDown){
			this.ship.body.velocity.y -= 20;
		} else if(this.dwkey.isDown){
			this.ship.body.velocity.y += 20;
		} else{
			this.ship.body.velocity.y = 0;
		}
		
		//parralax
		this.game.camera.x = this.ship.body.position.x -300;
		this.bg.position.x = this.game.camera.x*0.5;
		this.score.position.x = this.game.camera.x+10;
		this.health.position.x = this.game.camera.x+30;
		
		//collision
		this.game.physics.arcade.collide(this.ship, this.enemy, this.hitAst, null, this);
		this.game.physics.arcade.collide(this.ship, this.matter, this.destroy, null, this);
		this.game.physics.arcade.collide(this.ship, this.matter1, this.destroy, null, this);
		this.game.physics.arcade.collide(this.ship, this.matter2, this.destroy, null, this);
		
		//repetition
		if(this.ship.body.position.x > 1650){
			this.ship.body.position.x = 50;
		}
	},
	endGame: function(){
		this.bgm.stop();
		this.death = this.game.add.audio ('death', 1, false);
		this.death.play();
	    this.game.state.start("lose");
    },
	restartGame: function(){
		this.bgm.stop();
	    this.game.state.start("play");
    },
	destroy: function(ship, matter){
		this.score_count += 1;
		this.score.text = this.score_count;
		matter.destroy();
	},
	hitAst: function(ship, asteroid){
		this.health_count -= 1;
		this.health.text = this.health_count;
		asteroid.destroy();
	},
	winGame: function(){
		this.bgm.stop();
		this.win = this.game.add.audio ('win', 1, false);
		this.win.play();
		this.game.state.start("win");
	}
};