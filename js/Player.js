const Player =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.player=this.fetchParent().physics.add.sprite(x,y,"idle");
        this.player.body.allowGravity = false;
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        
        this.gun1 = new Gun(this).init(x, y);
        this.gun2 = new Gun(this).init(x, y);
        
        this.player.update = (dt) =>{
            if(this.gun1)this.gun1.update(dt, true);
            if(this.gun2)this.gun2.update(dt, false);
            
            this.input();
        }
        
        //this.fetchParent().add.updateList.add(this.player);
        
        return this.player;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = () =>{
        
        this.fetchParent().anims.create({
            key:'left',
            frames:this.fetchParent().anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.fetchParent().anims.create({
            key:'right',
            frames:this.fetchParent().anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.fetchParent().anims.create({
            key:'up',
            frames:this.fetchParent().anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.fetchParent().anims.create({
            key:'down',
            frames:this.fetchParent().anims.generateFrameNumbers('player',{start:0,end:0}),
            frameRate:10,
            repeat:-1
        });
        this.fetchParent().anims.create({
            key:'idle',
            frames:[{key:'player',frame:0}],
            frameRate:10,
            repeat:-1
        });
        
    }
    this.input = () =>{
        
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
        
        if(this.player.y < 400)this.player.y = 400;
    }
}
