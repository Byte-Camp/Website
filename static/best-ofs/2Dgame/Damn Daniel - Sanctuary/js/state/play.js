"use strict";
window.sanctuary.state.play = {
	preload: function(){
		//All characters have to be mounted: this.example = mt.create("example");
		this.door = mt.create("Doorway");
		this.pro1 = mt.create("Character");
		this.mon1 = mt.create("Monster1");
		this.mon2 = mt.create("Monster2");
		this.mon3 = mt.create("Monster3");
		this.mon4 = mt.create("Monster4");
		this.mon5 = mt.create("Monster5");
		this.mon6 = mt.create("Monster6");
		this.mon7 = mt.create("Monster7");
		this.mon8 = mt.create("Monster8");
		this.mon9 = mt.create("Monster9");
		this.mon10 = mt.create("Monster10");
		this.wep1 = mt.create("Weapon1");
		this.proj1 = mt.create("projectile");
		this.proj1.body.position.y = -10000; 
		this.healthBar = mt.create("HealthBar");
		this.ammoCount = mt.create("Magazine");
		this.countDownClock = mt.create("countDownClock");
		this.countDown = 2000;
		this.magazine = 20;
		this.health = 100;
		this.reloadTimer = 0;
		this.projectileFired =0;
		this.mag1 =0;
		this.bulletDistance =0;
		console.log("loading play state");
		this.game.load.audio('reload','audio/Reload.wav');
	},
	
	create: function(){
		//Keys are declared: this.exampleKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.useKey = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
		this.fireLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
		this.fireRight = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
		this.reloadKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
		console.log("starting play state");
		this.mon1.animations.add('roll', [0,1,2,3,4,5,6,7,8,9,10,11,12]);
		this.pro1.animations.add('walk', [0,1,2,3]);
		this.reload = this.game.add.audio('reload',1,false);
		
		this.healthBar.fixedToCamera = true;
		this.ammoCount.fixedToCamera = true;
		this.countDownClock.fixedToCamera = true;
	},
	update: function(){
		/*Keys have to be binded: if(this.exampleKey.isDown){
			this.pro.body.velocity.x/y = number;
		}*/
		this.countDown = this.countDown -1;
		this.game.physics.arcade.overlap(this.pro1,this.mon1,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon2,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon3,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon4,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon5,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon6,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon7,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon8,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon9,this.damagePro,null,this);
		this.game.physics.arcade.overlap(this.pro1,this.mon10,this.damagePro,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon1,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon2,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon3,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon4,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon5,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon6,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon7,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon8,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon9,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.proj1,this.mon10,this.damageAnt,null,this);
		this.game.physics.arcade.collide(this.pro1,this.door,this.win,null,this);
		if(this.reloadKey.isDown){
			if(this.magazine === 0){
					this.reloadTimer = this.reloadTimer +1;
					if(this.reloadTimer == 120){
						this.magazine = 20;
						this.reloadTimer =0;
					}
					if(this.reloadTimer == 60){
						this.reload.play();
					}
			}
			
		}
		if(this.magazine >0 ){
			if(this.fireRight.isDown){
				this.pro1.scale.x =1;
				this.proj1.body.position.x = this.pro1.body.position.x +80;
				this.proj1.body.position.y = this.pro1.body.position.y +97;
				this.proj1.scale.x =1;
				this.projectileFired = 1;
				this.mag1 = 1;
				this.projectileFired =0;
				this.proj1.body.velocity.x = 5000;
			}
			else if(this.fireLeft.isDown){
				
				this.pro1.scale.x =-1;
				this.proj1.body.position.x = this.pro1.body.position.x +74;
				this.proj1.body.position.y = this.pro1.body.position.y +100;
				this.proj1.scale.x =-1;
				this.mag1 = 1;
				//this.magazine = this.magazine -this.mag1/this.mag2;
				this.proj1.body.velocity.x = -5000;
			}
			else{
				this.bulletDistance = this.bulletDistance +1;
				if(this.bulletDistance == 30){
					this.proj1.body.velocity.x =0;
					this.proj1.body.position.y =10000;
				}
				this.magazine = this.magazine -this.mag1;
				this.mag1 = 0;
			}
		}
		if(this.magazine === 0){
					this.reloadTimer = this.reloadTimer +1;
					if(this.reloadTimer == 120){
						this.magazine = 20;
						this.reloadTimer =0;
					}
					if(this.reloadTimer == 60){
						this.reload.play();
					}
		}
		if(this.health > 0){
			//this.mon1.body.velocity.x = -100;
			this.mon1.animations.play('roll',10,true);
			this.mon2.animations.play('roll',10,true);
			this.mon3.animations.play('roll',10,true);
			this.mon4.animations.play('roll',10,true);
			this.mon5.animations.play('roll',10,true);
			this.mon6.animations.play('roll',10,true);
			this.mon7.animations.play('roll',10,true);
			this.mon8.animations.play('roll',10,true);
			this.mon9.animations.play('roll',10,true);
			this.mon10.animations.play('roll',10,true);
		}
		this.game.camera.follow(this.pro1);
		if(this.leftKey.isDown){
			this.pro1.scale.x =-1;
			this.pro1.body.velocity.x = -800;
			this.pro1.animations.play('walk',6,true);
			this.wep1.scale.x =-1;
			this.wep1.position.x = this.pro1.body.position.x +48;
			this.wep1.position.y = this.pro1.body.position.y +100;
		}
		else if(this.rightKey.isDown){
			this.pro1.scale.x =1;
			this.pro1.body.velocity.x = 800;
			this.pro1.animations.play('walk',6,true);
			this.wep1.scale.x =1;
			this.wep1.position.x = this.pro1.body.position.x +52;
			this.wep1.position.y = this.pro1.body.position.y +97;
		}
		else{
			this.pro1.body.velocity.x = 0;
			this.pro1.animations.stop();
			if(this.pro1.scale.x == 1){
				this.wep1.scale.x =1;
				this.wep1.position.x = this.pro1.body.position.x +52;
				this.wep1.position.y = this.pro1.body.position.y +97;	
			}
		
			else{
				this.pro1.scale.x = -1;
				this.wep1.scale.x =-1;
				this.wep1.position.x = this.pro1.body.position.x +48;
				this.wep1.position.y = this.pro1.body.position.y +100;
			}
		
		}
		//this.health = Math.round(this.health);
		this.healthBar.text =this.health + "/100";
		this.ammoCount.text ="Clip: " +this.magazine;
		this.countDownClock.text ="Time to reach the exit: " + this.countDown;
		
		if(this.health === 0){
			this.game.state.start("GameOver");
			
		}
	},
	damageAnt: function(proj1,mon){
		mon.destroy();
	},
	damagePro: function(){
		if(this.health >-0.1){
		this.health = this.health -0.4;
			
		}
	},
	win: function(){
		this.game.state.start("win");
	},
};