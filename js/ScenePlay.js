var ScenePlay={
    preload:function(){        
        this.load.spritesheet('player', 'assets/unknown.png',{frameWidth: 67, frameHeight: 115});
        this.load.image("enemyShots","assets/enemyShots.png");
    },
    create:function(){
        this.switching = false;
        
        var txt = this.add.text(game.canvas.width/2,game.canvas.height/2,"TITLE",{
            
        });
        txt.setInteractive();
        txt.on("pointerdown",()=>{
            this.switching = true;
            game.scene.start("Title");
            game.scene.stop("Play");
        });
        txt.x -= txt.width/2;
        
        this.anims.create({
            key:'left',
            frames:this.anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.anims.create({
            key:'up',
            frames:this.anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.anims.create({
            key:'down',
            frames:this.anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.anims.create({
            key:'idle',
            frames:[{key:'player',frame:0}],
            frameRate:10,
            repeat:-1
        });
        
        this.player=this.physics.add.sprite(100,200,"idle");
        this.player.body.allowGravity = false;
        
        var enemyShots=this.physics.add.staticGroup();
        enemyShots.create(100,400,"enemyShots");
        enemyShots.create(500,300,"enemyShots");
        
        //this.physics.add.collider(this.player, enemyShots);
        
        this.physics.add.overlap(this.player, enemyShots, ()=>{console.log("overlapped");}, null, this);
    },
    update:function(t,dt){
        if(this.switching)return;
        
        var keys = this.input.keyboard.createCursorKeys();
        var moveX = 0;
        if(left.isDown)moveX--;
        else if(right.isDown)moveX++;
        var moveY = 0;
        if(up.isDown)moveY--;
        else if(down.isDown)moveY++;
        
        switch(moveX){
            case -1:
                this.player.anims.play('left', true);
                break;
            case 0:
                this.player.anims.play('idle');
                break;
            case 1:
                this.player.anims.play('right', true);
                break;
        }
        switch(moveY){
            case -1:
                this.player.anims.play('up', true);
                break;
            case 0:
                this.player.anims.play('idle');
                break;
            case 1:
                this.player.anims.play('down', true);
                break;
        }
        
        this.player.setVelocityX(moveX*150);
        this.player.setVelocityY(moveY*150);
        
        if(keys.space.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-400);
        }
        
    }
};