var PlayerHP = 3;
const Player =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.player=this.fetchParent().physics.add.sprite(x,y,"idle");
        this.player.body.allowGravity = false;
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.player.stunned = 0;
        this.player.setScale(.5,.5);
        
        this.gun1 = new Gun(this).init(x, y);
        this.gun2 = new Gun(this).init(x, y);
        
        PlayerHP = 3;
        
        this.player.update = (dt) =>{
            if(this.gun1)this.gun1.update(dt, true);
            if(this.gun2)this.gun2.update(dt, false);
            
            if(this.player.stun > 0){
                this.player.stun-=dt;
                this.player.setVelocityX(0);
                this.player.setVelocityY(0);
                return;
            }
            
            this.input();
        }
        this.player.damage = () =>{
            PlayerHP--;
        }
        this.player.stunMe = () =>{
            this.player.stun = .25;
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
        var moveY = 0;
        if(!useMouse){
            if(up.isDown)moveY--;
            else if(down.isDown)moveY++;
            if(left.isDown)moveX--;
            else if(right.isDown)moveX++;
        }
        else{
            var posX = this.fetchParent().input.activePointer.position.x;
            var posY = this.fetchParent().input.activePointer.position.y;
            
            var distX = Phaser.Math.Interpolation.Linear([0,1],Math.abs(this.player.x - posX)/10);
            var distY = Phaser.Math.Interpolation.Linear([0,1],Math.abs(this.player.y - posY)/10);
            
            if(distX > 1)distX=1;
            if(distX < -1)distX=-1;
            if(distY > 1)distY=1;
            if(distY < -1)distY=-1;
            
            if(posX > this.player.x)moveX+=distX;
            else if(posX < this.player.x)moveX-=distX;
            if(posY > this.player.y)moveY+=distY;
            else if(posY < this.player.y)moveY-=distY;
        }
        
        if(moveX < 0)this.player.anims.play('left', true);
        else if(moveX > 0)this.player.anims.play('right', true);
        else if(moveY < 0)this.player.anims.play('up', true);
        else if(moveY > 0)this.player.anims.play('down', true);
        else this.player.anims.play('idle');
        
        this.player.setVelocityX(moveX*250);
        this.player.setVelocityY(moveY*250);
        
        if(this.player.y < 400)this.player.y = 400;
    }
}
