"use strict";
window.SpaceMonsters.state.instr = {
	preload: function(){
		
	},
	
	create: function(){
	this.bg = this.game.add.tileSprite(0, 0, 800, 600, '/backpage.png');
	this.instr1 = mt.create("A");
	this.instr2 = mt.create("D");
	this.instr3 = mt.create("spacebar");
	this.instr4 = mt.create("mouse");
	this.text1 = mt.create("up");
	this.text2 = mt.create("right");
	this.text3 = mt.create("left");
	this.text4 = mt.create("shoot");
	this.start = this.game.add.button(340, 362, '/back.png', this.Back);
	},
	
	update: function(){
		
	
	},
	Back: function(){
		this.game.state.start("menu");
	}
};