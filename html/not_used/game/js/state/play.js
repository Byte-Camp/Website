"use strict";
window.Dragger.state.play = {
	preload: function(){
		console.log("loading play state");
	},
	
	create: function(){
		console.log("starting play state");
	
		this.ground = mt.create("ground");
		this.dirt = mt.create("dirt");
		this.boxGroup = mt.create("Draggable");
		this.player = mt.create("player");
		this.cursorbox = mt.create("CursorBox");
		this.bullets = mt.create("bullets");
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		
		this.boxGroup.forEach(function(box){
			box.inputEnabled = true;
			box.input.enableDrag();
			box.body.drag.x = 50000;
			box.events.onDragStart.add(function(){
				box.body.gravity.y = 0;
				box.body.immovable = true;
			});
			box.events.onDragStop.add(function(){
				box.body.gravity.y = 500;
				box.body.immovable = false;
			});
		});
		
		this.game.camera.x = 0;
		console.log(this.game.camera.x);
		this.game.camera.y = 0;
		this.clicked = false;
		this.destroyTheBox = false;
		
		
	},
	
	update: function(){
		
		//this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);
		this.game.physics.arcade.collide(this.player, this.ground.self, null, null, this);
		this.game.physics.arcade.collide(this.player, this.dirt.self, null, null, this);
		this.game.physics.arcade.collide(this.player, this.boxGroup, null, null, this);
		this.game.physics.arcade.collide(this.boxGroup, this.ground.self, null, null, this);
		this.game.physics.arcade.collide(this.boxGroup, this.cursorbox, null, null, this);
		this.game.physics.arcade.collide(this.boxGroup, this.boxGroup, null, null, this);
		this.game.physics.arcade.overlap(this.cursorbox, this.bullets, this.destroyBox);
		
		if(this.cursors.up.isDown && this.player.body.touching.down){
			this.player.body.velocity.y = -250;
		}
		
		if(!this.game.input.activePointer.leftButton.isDown){
			if(this.cursors.left.isDown){
				this.player.body.velocity.x = -200;
				//this.player.rotation += 0.1;
				this.player.scale.x = -1;
			} else if(this.cursors.right.isDown){
				this.player.body.velocity.x = 200;
				//this.player.rotation -= 0.1;
				this.player.scale.x = 1;
			} else {
				this.player.body.velocity.x = 0;
			}
		} else {
				this.player.body.velocity.x = 0;
		}
		
		//this.player.rotation = this.game.physics.arcade.angleToPointer(this.player);		
		this.game.camera.x = this.player.position.x - 200;
		
		// GET MOUSE POSITION AND PUT AN OBJECT AT IT
		//this.cursorbox.position.x = this.game.input.mousePointer.x;
		//this.cursorbox.position.y = this.game.input.mousePointer.y;
		
		// HAVE AN OBJECT MOVE TO YOUR CURSOR WHEN THE LEFT BUTTON IS BEING CLICKED
		
		if(this.cursorbox.exists){
			this.game.physics.arcade.moveToObject(this.cursorbox, this.player, 50);
		} else {
			this.cursorbox.position.x = 500;
			this.cursorbox.position.y = 100;
			this.cursorbox.exists = true;
		}
		
		if(this.game.input.activePointer.leftButton.isDown){
			
			if(this.clicked === false){
				this.s = this.bullets.create(this.player.position.x + 20, this.player.position.y - 20, '/launcher.png');
				this.s.height = 25;
				this.s.width = 25;
				this.s.body.collideWorldBounds = false;
				this.game.physics.arcade.moveToPointer(this.s, 300);
				this.clicked = true;
			}

			
		} else{
			this.clicked = false;
		}
		
		this.bullets.forEach(function(item){
			if(item.position.y === 0 || item.position.y === 575){
				item.destroy();
			}
		});
		
		// CAMERA JUNK
		//if(this.box.position.x < this.game.camera.x - 30){
			//this.box.position.x = this.game.camera.x + 200;
		//}
		
		//if(this.player.position.x > this.game.camera.x + 800){
			//this.game.camera.x += 800;
			//this.box.position.x = this.game.camera.x + 400;
			//this.box.position.y = 200;
			//console.log(this.game.camera.x);
			//this.player.position.x = this.game.camera.x + 50;

		//}
		
		
	},
	
	destroyBox: function(box, bullet){
		box.exists = false;
		bullet.destroy();
	}
};