var SceneCredits = {
    preload:function(){
          this.load.image("PLAY","assets/PLAY.png");
          this.load.image("EXIT","assets/EXIT.png");
          this.load.image("CREDITS","assets/CREDITS.png");
          this.load.image("TITLE2","assets/TITLE2.png");
          this.load.image("CREDLIST","assets/CREDLIST.png");
        
    },
    create:function(){
        //make some images to make this look better
         var play = this.add.image(300,200,"TITLE",)
        var play = this.add.image(300,500,"CREDLIST",)
        var txt = this.add.image(485,655,"TITLE2",);
        txt.setInteractive();
        
        txt.on("pointerdown",()=>{
        game.scene.stop("Credits");
        game.scene.start("Title");
        });           
        
       
    },
    update:function(t,dt){
        
    }
}