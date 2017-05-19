"use strict";
window.WolfRun = {
	
	// reference to the Phaser.Game instance
	game: null,
	
	// main function
	main: function(){
		this.game = new Phaser.Game(mt.data.map.viewportWidth, mt.data.map.viewportHeight, Phaser.AUTO, document.body, window.WolfRun.state.boot);
	},
	
	// here we will store all states
	state: {}
};

window.addEventListener('DOMContentLoaded', function(){
	window.WolfRun.main();
}, false);