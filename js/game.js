var gameProperties = {
    screenWidth: 640,
    screenHeight: 480,
};

var states = {
    game: "game",
};

var graphicAssets = {
    ship:{URL:'assets/ship.png', name:'ship'},
    bullet:{URL:'assets/bullet.png', name:'bullet'},    
    
    asteroidLarge:{URL:'assets/asteroidLarge.png', name:'asteroidLarge'},
    asteroidMedium:{URL:'assets/asteroidMedium.png', name:'asteroidMedium'},
    asteroidSmall:{URL:'assets/asteroidSmall.png', name:'asteroidSmall'},
};

var gameState = function(game){
    
};

gameState.prototype = {
    
    preload: function () {
        
    },
    
    create: function () {
        
    },

    update: function () {
        
    },
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(states.game, gameState);
game.state.start(states.game);