"use strict";
window.josh.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm','Kajet - Train Hijack Hero.mp3');
	},
	
	
	create: function(){
		console.log("starting play state");
		this.backround = mt.create("backround");
		this.blocks = mt.create("blocks");
		this.violence = mt.create("violence");
		this.goombas = mt.create("goombas");
		
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();
		
		
		this.Goomba = mt.create("Goomba");
		this.Goomba.animations.add('goombas_walk',[0,1,0,1]);
		this.Goomba.animations.play('goombas_walk',4,true);
	
		
			this.goomba2 = mt.create("Goomba2");
		this.goomba2.animations.add('goomba2s_walk',[0,1,0,1]);
		this.goomba2.animations.play('goomba2s_walk',4,true);
		
		this.slime = mt.create ("slime");
		this.slime.animations.add ('slimes_walk1',[0,1,2,0,1,2]);
		this.slime.animations.play('slimes_walk1',6,true);
		
		this.victory = mt.create("victory");
		
		this.character = mt.create("MTT2");
		
		this.score = mt.create("score");
	    this.score2 = mt.create("score2");
		
		this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
	    this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.score_count = 0;
		this.score2_count = 0;
		
	},
	
	update: function(){
		
		this.game.camera.x = this.character.position.x -400;
		this.game.camera.y = this.character.position.y -300;
		this.game.physics.arcade.collide(this.character, this.blocks);
		this.game.physics.arcade.collide(this.character, this.violence.self, this.restart, null, this);
		this.game.physics.arcade.collide(this.character, this.victory.self, this.win, null, this);
		this.game.physics.arcade.collide(this.character, this.goombas.self, this.restart, null, this);
		
		if(this.character.body.position.y > 800){
		this.restart();
			
		}
		   
		if(this.Rkey.isDown){
			this.character.body.velocity.x += 5;
		}else if(this.Lkey.isDown){
			this.character.body.velocity.x -= 5;
		}else if (this.character.body.touching.down){
			this.character.body.velocity.x = 0;
		}
		
		if(this.Ukey.isDown && this.character.body.touching.down) {
			this.character.body.velocity.y = -200;
		}
	},
	
	restart: function(){
		this.score_count += 1;
		this.score2_count -= 10;
		this.score.text = this.score_count;
		this.score2.text = this.score2_count;
		 this.character.body.position.x = 4;
	     this.character.body.position.y = 390;
		
	},
	
	win: function(){
		this.score2_count += 100000;
		this.score2.text = this.score2_count;
		 this.character.body.position.x = 4;
	     this.character.body.position.y = 390;
    }
};