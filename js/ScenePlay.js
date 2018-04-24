var ScenePlay={
    preload:function(){        
        this.load.spritesheet('player', 'assets/unknown.png',{frameWidth: 67, frameHeight: 115});
        this.load.spritesheet('ball', 'assets/blank.png',{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("enemyShots","assets/enemyShots.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("playerShots","assets/playerShots.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("blank","assets/blank.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("shooter","assets/shooter.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("weakpoint","assets/weakpoint.png",{frameWidth: 50, frameHeight: 50});
        this.load.spritesheet("hydra","assets/hydraSheet.png",{frameWidth: game.canvas.width, frameHeight: game.canvas.height});
        this.load.spritesheet("hHead","assets/heads.png",{frameWidth: 105, frameHeight: 119});
        this.load.spritesheet("argus","assets/argusSheet.png",{frameWidth: game.canvas.width, frameHeight: game.canvas.height});
        this.load.spritesheet("aEye","assets/eyes.png",{frameWidth: 87, frameHeight: 78});
    },
    create:function(){
        this.grid = new Grid(this).init();
        this.playerShots = [];
        this.grunts = [];
        game.canvas.oncontextmenu = function (e) { e.preventDefault(); }
        this.switching = false;
        
        var txt = this.add.text(game.canvas.width/2,game.canvas.height/2,"-SPACE TO SERVE BALL-",{});
        txt.setInteractive();
        txt.on("pointerdown",()=>{
            //this.switching = true;
            //game.scene.start("Title");
            //game.scene.stop("Play");
        });
        txt.x -= txt.width/2;
        
        
        //var enemyShots=this.physics.add.staticGroup();
        //enemyShots.create(100,400,"enemyShots");
        //enemyShots.create(500,300,"enemyShots");
        
        this.player = new Player(this).init(game.canvas.width/2,game.canvas.height - 100);
        this.ball = new Ball(this).init(this.player.x,this.player.y);
        //this.boss = new Argus(this).init(this.grid);
        
        //this.boss.attack();
        
        this.lastWasArgus = true;
        this.score = 0;
        this.lastLevelUp = 0;
        
        //this.physics.add.collider(this.player, enemyShots);
        
        //this.physics.add.overlap(this.player, enemyShots, ()=>{console.log("overlapped");}, null, this);
        this.hpText = this.add.text(0,0,BossHp,{});
        this.playerHpText = this.add.text(game.canvas.width,0,PlayerHP,{}).setOrigin(1,0);
        this.scoreText = this.add.text(game.canvas.width/2,0,this.score,{});
        
        this.spawnBoss = () =>{
            this.boss = (this.lastWasArgus)? new Argus(this).init(this.grid) : new Hydra(this).init(this.grid);
            this.lastWasArgus = !this.lastWasArgus;
            
            this.boss.attack();
            this.children.bringToTop(this.player);
            this.children.bringToTop(this.ball);
        }
    },
    update:function(t,dt){
        if(this.switching)return;
        
        if(!this.boss && this.ball.activeInGame)this.spawnBoss();
        else if(BossHp <= 0){
            this.boss.destroy();
            this.spawnBoss();
            this.score += 10000;
        }
        
        dt/=1000;
        
        if(this.ball.activeInGame)this.boss.update(dt);
        this.player.update(dt);
        this.ball.update(dt);
        this.playerShots.forEach((shot)=>{
            shot.update(dt);
        });
        this.grunts.forEach((grunt)=>{
            grunt.update(dt);
        });
        
        if(PlayerHP < 0){
            this.switching = true;
            game.scene.start("GameOver");
            game.scene.stop("Play");
        }
        
        this.hpText.setText(BossHp + "/" + MaxHP);
        this.playerHpText.setText("Balls: " + PlayerHP);
        this.scoreText.setText(this.score + "");
        this.scoreText.x = game.canvas.width/2 - this.scoreText.width/2;
        
        if(this.score > this.lastLevelUp + 10000){
            this.lastLevelUp = this.score;
            PlayerHP++;
        }
    }
};