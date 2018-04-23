var SceneTitle = {
    preload:function(){
        this.load.image("IMG","assets/title.png");
        
    },
    create:function(){
        //make some images to make this look better
        var img = this.add.image(280,200,"IMG",);
        var txt = this.add.text(280,200,"PLAY",);
        img.setInteractive()
        txt.setInteractive();
        img.on("pointerdown",()=>{
        game.scene.stop("Title");
        game.scene.start("Play");
        });
        
        var txtCred = this.add.text(270,300,"CREDITS",);
        txtCred.setInteractive();
        txtCred.on("pointerdown",()=>{
        game.scene.stop("Title");
        game.scene.start("Credits");
        });
        
        var txtExit = this.add.text(280,400,"EXIT",);
        txtExit.setInteractive();
        txtExit.on("pointerdown",()=>{
        game.scene.stop("Title");
       // game.scene.start("Exit");
        });
    },
    update:function(t,dt){
        
    }
}