var ScenePlay={
    preload:function(){        
        this.load.spritesheet('player', 'assets/unknown.png',{frameWidth: 67, frameHeight: 115});
        this.load.spritesheet('ball', 'assets/blank.png',{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("enemyShots","assets/enemyShots.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("blank","assets/blank.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("weakpoint","assets/weakpoint.png",{frameWidth: 50, frameHeight: 50});
    },
    create:function(){
        this.grid = new Grid(this).init();
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
        this.argus = new Argus(this).init(this.grid);
        
        this.argus.attack();
        
        //this.physics.add.collider(this.player, enemyShots);
        
        this.physics.add.overlap(this.player, enemyShots, ()=>{console.log("overlapped");}, null, this);
    },
    update:function(t,dt){
        if(this.switching)return;
        
        dt/=1000;
        
        this.argus.update(dt);
        this.player.update(dt);
        this.playerShots.forEach((shot)=>{
            shot.update(dt);
        })
    }
};