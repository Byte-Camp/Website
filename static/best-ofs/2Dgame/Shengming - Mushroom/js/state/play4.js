"use strict";
window.mushroom.state.play = {
	preload: function(){
		console.log("loading play state");
	},
	
	create: function(){
		console.log("starting play state");
		

		this.yellowbackground = mt.create("yellowsbackground");
		this.yellowbackground = this.game.add.tileSprite(0,0,3000,800,"/g3711.png");

		this.pathway3 = mt.create("pathway3");
		this.player=mt.create("weirdmushroom");
		this.enemy=mt.create("evilmushroom3");
		this.enemy1=mt.create("evilmushroom4");
		this.enemy2=mt.create("evilmushroom5");
		this.coins3=mt.create("coins3");
		this.number2=mt.create("number2");
		this.timer1=mt.create("timer1");
		this.seconds = 0;
		this.timer_count = 0;
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
		
		this.game.camera.x = this.player.position.x - 400;
		this.game.physics.arcade.collide(this.player, this.pathway3);
		this.game.physics.arcade.collide(this.player, this.enemy.self,this. restartGame, null, this);
		this.game.physics.arcade.overlap(this.player, this.coin.self, this.destroyObject, null, this);
		
		this.game.camera.y = this.player.position.y - 300;
		
		if(this.enemy.body.position.y > 820){
			this.enemy.body.position.y = -100;
			
			this.enemy.body.position.x = Math.random() * 3000;
			
			this.enemy.body.velocity.y = 0;
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
		
		
	},
	
	destroyObject: function(player,coin){
		this.score_count +=10;
		this.number.text = this.score_count;
		coin.destroy();
	},
	
	restartGame: function(){
		this.game.state.start("play4");
	}
};