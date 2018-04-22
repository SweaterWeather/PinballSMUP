var SceneTitle = {
    preload:function(){
        
    },
    create:function(){
        var txt = this.add.text(400,200,"PLAY",);
        txt.setW(100);
        txt.setInteractive();
        txt.on("pointerdown",()=>{
        game.scene.stop("Title");
        game.scene.start("Play");
        });
    },
    update:function(t,dt){
        
    }
}