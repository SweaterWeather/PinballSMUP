var SceneCredits = {
    preload:function(){
        
    },
    create:function(){  
        var txtWords = this.add.text(280,300,"Game Made By These Salty Bois",);
        
        var txt = this.add.text(280,200,"TITLE",);
        txt.setInteractive();
        txt.on("pointerdown",()=>{
        game.scene.stop("Credits");
        game.scene.start("Title");
        });           
        
        var txtExit = this.add.text(280,400,"EXIT",);
        txtExit.setInteractive();
        txtExit.on("pointerdown",()=>{
        game.scene.stop("Title");
        //game.scene.start("Play");
        });
    },
    update:function(t,dt){
        
    }
}