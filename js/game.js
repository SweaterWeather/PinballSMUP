var config={
    type:Phaser.AUTO,
    width:400,
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
game.scene.add("GameOver", SceneGameOver);

var up = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
var down = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
var left = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
var right = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

var useMouse = true;

game.scene.start("Play");