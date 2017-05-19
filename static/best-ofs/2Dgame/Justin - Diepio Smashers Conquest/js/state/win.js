"use strict";
window.DiepioSmashersConquest.state.win = {
	preload: function(){
		
	},
	
	create: function(){
		this.winmessage = mt.create("WinText");
		this.winpic = mt.create("Victorious smasher");
		this.exit = mt.create("Win door");
		
	},
	
	update: function(){
		this.game.camera.x = 12113.6667;
		this.game.camera.y = 0;
	}
};