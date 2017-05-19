"use strict";
window.WolfRun.state.play = {
	preload: function(){
		console.log("loading play state");
		this.tiles= mt.create("Blocky");
		this.player=mt.create("wolf animation");
		this.coins=mt.create("Coins");
		this.flea=mt.create("Fleas");
		this.score = 0;
		this.scoreBoard = mt.create("Score");
		this.SnowDrift=mt.create("white wolf");
		this.Sky=mt.create("light brown wolf");
	},
	
	create: function(){
		console.log("starting play state");
		this.Lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.Rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.Ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		
		this.player.animations.add('move',[0,1,2,3,4,5,6]);
		this.player.animations.add('jump',[7,8,9,10,11]);
	},
	
	update: function(){
		
		
		this.game.physics.arcade.collide(this.player, this.tiles, null, null, this);
		this.game.camera.x = this.player.body.position.x - 400;
		this.game.camera.y = this.player.body.position.y - 300;
		this.scoreBoard.x= this.game.camera.x+50;
		this.scoreBoard.y= this.game.camera.y+30;
		this.game.physics.arcade.collide(this.player,this.flea, this.GameOver, null, this);
		this.game.physics.arcade.overlap(this.player,this.coins, this.CollectCoin, null, this);
		if(this.Lkey.isDown)
		{	
			//this.player.body.offsetY=2;
			this.player.scale.x=1;
			this.player.animations.play('move',7, true);
			this.player.body.velocity.x= -200;
		}
		else if(this.Rkey.isDown)
		{
			//this.player.body.offsetY=3;
			this.player.scale.x=-1;
			this.player.animations.play('move',7, true);
			this.player.body.velocity.x=200;
		}
		else 
		{
			this.player.animations.stop('move');
			this.player.body.velocity.x=0;
		}
		
		if(this.Ukey.isDown && this.player.body.touching.down)
		{
			this.player.body.velocity.y = -300;	
			this.player.animations.play('jump',5, true);
			
		}
	
		else{
			//this.player.animations.stop('jump');
		}
			
	},
	
	GameOver: function(){
		this.game.state.start("play");
	},
	CollectCoin: function(player, money){	
		this.score = this.score+1;
	    this.scoreBoard.text=this.score;
		money.destroy();
	}
	
		
};
