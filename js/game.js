var config={
    type:Phaser.AUTO,
    width:600,
    height:725,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:400}
        }
    },    
};

var game=new Phaser.Game(config);
game.scene.add("Title", SceneTitle);
game.scene.add("Play", ScenePlay);

var up = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
var down = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
var left = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
var right = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

game.scene.start("Play");