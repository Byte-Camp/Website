"use strict";
window.Dragger = {
	
	// reference to the Phaser.Game instance
	game: null,
	
	// main function
	main: function(){
		this.game = new Phaser.Game(mt.data.map.viewportWidth, mt.data.map.viewportHeight, Phaser.AUTO, document.body, window.Dragger.state.boot);
	},
	
	// here we will store all states
	state: {}
};

window.addEventListener('DOMContentLoaded', function(){
	window.Dragger.main();
}, false);