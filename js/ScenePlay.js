var ScenePlay={
    preload:function(){        
        this.load.spritesheet('player', 'assets/unknown.png',{frameWidth: 67, frameHeight: 115});
        this.load.spritesheet('ball', 'assets/blank.png',{frameWidth: 50, frameHeight: 50});
        this.load.image("enemyShots","assets/enemyShots.png");
        this.load.image("blank","assets/blank.png");
    },
    create:function(){
        this.playerShots = [];
        game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
        this.switching = false;
        
        var txt = this.add.text(game.canvas.width/2,game.canvas.height/2,"TITLE",{});
        txt.setInteractive();
        txt.on("pointerdown",()=>{
            this.switching = true;
            game.scene.start("Title");
            game.scene.stop("Play");
        });
        txt.x -= txt.width/2;
        
        var enemyShots=this.physics.add.staticGroup();
        enemyShots.create(100,400,"enemyShots");
        enemyShots.create(500,300,"enemyShots");
        
        this.player = new Player(this).init(game.canvas.width/2,game.canvas.height - 100);
        this.ball = new Ball(this).init(0,0);
        this.grunt = new GruntBumper(this).init(200,200);
        
        //this.physics.add.collider(this.player, enemyShots);
        
        this.physics.add.overlap(this.player, enemyShots, ()=>{console.log("overlapped");}, null, this);
    },
    update:function(t,dt){
        if(this.switching)return;
        
        dt/=1000;
        
        this.player.update(dt);
        this.playerShots.forEach((shot)=>{
            shot.update(dt);
        })
    }
};