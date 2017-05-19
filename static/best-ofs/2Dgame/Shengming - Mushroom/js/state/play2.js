"use strict";
window.mushroom.state.play2 = {
	preload: function(){
		console.log("loading play2 state");
	},
	
	create: function(){
		console.log("starting play2 state");
		
		this.game.camera.x = 1800;
		this.redsea = mt.create("redsea");

		this.Pathway2 = mt.create("Pathway2");
		this.player=mt.create("weirdmushroom1");
		this.enemy=mt.create("evilmushroom1");
		this.enemy2=mt.create("evilmushroom2");
		this.coins2=mt.create("coins2");
		this.score=mt.create("score");
		this.timer1=mt.create("timer1");
		this.seconds = 0;
		this.timer1_count = 0;
		this.score_count = 0;
		
		this.Lkey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.Rkey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.Ukey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
	},
	
	update: function(){
		//Increase time by one second
		this.timer1_count +=1;
		
		if(this.timer1_count == 60 ){
			this.seconds +=1;
			this.timer1.text = this.seconds;
			this.timer1_count = 0;
		}
		

		//this.game.physics.arcade.collide(this.player, this.pathway);
		this.game.physics.arcade.collide(this.player, this.Pathway2);
		this.game.physics.arcade.collide(this.player, this.enemy.self,this.restartGame, null, this);
		this.game.physics.arcade.collide(this.player, this.enemy2.self,this.restartGame, null, this);
		this.game.physics.arcade.overlap(this.player, this.coins2.self, this.destroyObject, null, this);

		this.game.camera.x = this.player.position.x - 400;		
		this.game.camera.y = this.player.position.y - 300;
		
		if(this.enemy.body.position.y > 820){
			this.enemy.body.position.y = -100;
			
			this.enemy.body.position.x = 1800 + Math.random() * 1800;
			
			this.enemy.body.velocity.y = 0;
		}
		if(this.enemy2.body.position.y > 820){
			this.enemy2.body.position.y = -100;
			
			this.enemy2.body.position.x = 1800 + Math.random() * 1800;
			
			this.enemy2.body.velocity.y = 0;
		
		}
		
		
		
		if(this.Lkey.isDown){
			this.player.body.velocity.x -= 5;
		}
				
		else if(this.Rkey.isDown){
			this.player.body.velocity.x += 5;
		}
		else if (this.Ukey.isDown && this.player.body.touching.down ){
			this.player.body.velocity.y -=400;
		}
		else{
			this.player.body.velocity.x = 0;
		}
		/*if(this.score_count == 10){
			this.switchLevel();
		}*/
	},
	
	destroyObject: function(player,coin){
		this.score_count +=10;
		this.score.text = this.score_count;
		coin.destroy();
	},
	
	restartGame: function(){
		this.game.state.start("play2");
	},
		switchLevel: function(){
		this.game.state.start("play3");
	}
};
