var SceneTitle = {
    preload:function(){
          this.load.image("PLAY","assets/PLAY.png");
          this.load.image("EXIT","assets/EXIT.png");
          this.load.image("CREDITS","assets/CREDITS.png");
          this.load.image("TITLE","assets/TITLE.png");
        
    },
    create:function(){
        //game.canvas.width/2,game.canvas.height
        //make some images to make this look better
        var play = this.add.image(game.canvas.width/2,200,"TITLE",); 
        play.setScale(.5,.5);
        var play = this.add.image(game.canvas.width/2,350,"PLAY",);       
        play.setInteractive()       
        play.on("pointerdown",()=>{
        game.scene.stop("Title");
        game.scene.start("Play");
        });
        
        var credits = this.add.image(game.canvas.width/2,400,"CREDITS",); 
        credits.setInteractive();
        credits.on("pointerdown",()=>{
        game.scene.stop("Title");
        game.scene.start("Credits");
        });
        
       var exit = this.add.image(game.canvas.width/2,450,"EXIT",); 
        exit.setInteractive();
        exit.on("pointerdown",()=>{
        game.scene.stop("Title");
       // game.scene.start("Exit");
        });
    },
    update:function(t,dt){
        
    }
}