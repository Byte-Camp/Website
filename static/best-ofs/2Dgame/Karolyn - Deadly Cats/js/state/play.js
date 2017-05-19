"use strict";
window.deadlycats.state.play = {
	preload: function(){
		console.log("loading play state");
		this.game.load.audio('bgm', 'audio/Flaming Firebolt - Funky Loop.mp3');
	},
	
	create: function(){
		this.bgm = this.game.add.audio('bgm');
		this.bgm.play();
		this.bg = this.game.add.tileSprite(0, 0, 2000, 600, '/mouse burrow.png');
		console.log("starting play state");
		this.p2 = mt.create("girl mouse");
		this.blocks = mt.create("block");
		this.p1 = mt.create("boy mouse");
		this.death = mt.create("deadly cat");
		this.leaf = mt.create("leaf");
		this.restart = mt.create("spike");
		this.death2 = mt.create("deadly cat");
		this.noleaf = mt.create("leaf eater");
		this.points = mt.create("point");
		this.fill = mt.create("hole");
		this.leafs = mt.create("leafs");
		this.point = mt.create("Point");
		this.counter =0;
		this.seed = mt.create("seed");		
		this.lkey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.rkey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.ukey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.jumpkey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
		this.rightkey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.leftkey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.upboy = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.upgirl = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
	},
	
	update: function(){
		this.game.physics.arcade.collide(this.p1, this.leafs, this.collect, null,this);
		this.game.physics.arcade.collide(this.p2, this.leafs, this.collect2, null,this);
		this.game.physics.arcade.collide(this.p1, this.restart, this.restartgame, null,this);
		this.game.physics.arcade.collide(this.p2, this.restart, this.restartgame, null,this);
		this.game.physics.arcade.collide(this.p1, this.blocks);
		this.game.physics.arcade.collide(this.p2, this.blocks);
		this.game.physics.arcade.collide(this.p1, this.death, this.p2win, null, this);
		this.game.physics.arcade.collide(this.p2, this.death, this.p1win, null, this);
		this.game.physics.arcade.collide(this.noleaf, this.leaf, this.ahhh, null,this);
		this.game.physics.arcade.collide(this.p2, this.won, this.next, null,this);
		this.game.physics.arcade.collide(this.p1, this.won, this.next, null,this);
		this.game.physics.arcade.collide(this.p1, this.iwin);
		this.game.physics.arcade.collide(this.p2, this.iwin);
		
		if(this.seed.body.position.y > 801){
			this.seed.body.position.y = -50;
			this.seed.body.velocity.y = 0;
			this.seed.body.position.x = Math.random() * 1400;
		}
		
		if(this.death.body.position.y > 801){
			this.death.body.position.y = -50;
			this.death.body.velocity.y = 0;
			this.death.body.position.x = Math.random() * 1400;
		}
			if(this.noleaf.body.position.y > 801){
			this.noleaf.body.position.y = -50;
			this.noleaf.body.velocity.y = 300;
			this.noleaf.body.position.x = Math.random() * 1400;
		}
				if(this.death2.body.position.y > 801){
			this.death2.body.position.y = -50;
			this.death2.body.velocity.y = 0;
			this.death2.body.position.x = Math.random() * 1400;
		}
		if(this.leaf.body !==  null){
				if(this.leaf.body.position.y > 801){
			this.leaf.body.position.y = -50;
			this.leaf.body.velocity.y = 0;
			this.leaf.body.position.x = Math.random() * 1400;
		}
		}
		if(this.p1.body !== null){
			if(this.upboy.isDown){
			this.p1.body.velocity.y = -1000;
			}
			if(this.lkey.isDown){
				this.p1.body.velocity.x -= 100;
				this.p1.scale.x = 1;
			}else if(this.rkey.isDown){
				this.p1.body.velocity.x += 100;
				this.p1.scale.x = -1;
			}else{
				this.p1.body.velocity.x = 0;
			}
					if(this.ukey.isDown && this.p1.body.touching.down){
			this.p1.body.velocity.y = -400;
		}
		}
		if(this.p2.body !== null){
			if(this.upgirl.isDown){
			this.p2.body.velocity.y = -1000;
			}
			if(this.leftkey.isDown){
				this.p2.body.velocity.x -= 100;
				this.p2.scale.x = 1;
			}else if(this.rightkey.isDown){
				this.p2.body.velocity.x += 100;
				this.p2.scale.x = -1;
			}else{
				this.p2.body.velocity.x = 0;
			}
			if(this.jumpkey.isDown && this.p2.body.touching.down){
				this.p2.body.velocity.y = -400;
			}
		}


		
		
		
	},
	p2win: function(){
		this.p1.destroy();
		this.won = mt.create("win");
	},
		p1win: function(){
		this.p2.destroy();
		this.won = mt.create("win");
	},
	restartgame: function(){
		this.bgm.stop();
		this.game.state.start("play");
	},
	ahhh: function(){
		this.leaf.destroy();
	},
	next: function(){
		this.iwin = mt.create("iwin");
	},
	collect: function(p1, leaf){
				leaf.destroy();
		this.counter += 1;
		this.point.text = this.counter;
	},
	collect2: function(p2, leaf){
		leaf.destroy();
		this.counter += 1;
		this.point.text = this.counter;
	}

};