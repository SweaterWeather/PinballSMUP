const EnemyShot =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y, angle) =>{
        
        
        this.makeAnims();
        
        this.shot=this.fetchParent().physics.add.sprite(x,y,"enemyShots");
        this.shot.body.allowGravity = false;
        this.shot.allowDrag = false;
        this.shot.setScale(.5,.5);
        
        this.fetchParent().playerShots.push(this.shot);
        this.shot.lifeSpan = 5;
        
        var veloc = 150;
        
        this.shot.setVelocityY(Math.sin(angle)*veloc);
        this.shot.setVelocityX(Math.cos(angle)*veloc);
        this.shot.right = right;
        
        this.fetchParent().physics.add.overlap(this.fetchParent().player, this.shot, ()=>{
            this.fetchParent().player.stunMe();
            this.shot.destroy();
        }, null, this);
        this.fetchParent().physics.add.overlap(this.fetchParent().ball, this.shot, ()=>{
            this.shot.destroy();
            this.fetchParent().score++;
        }, null, this);
        
        this.shot.update = (dt) =>{
            this.shot.lifeSpan -= dt;
            if(this.shot.lifeSpan < 0)this.shot.destroy();
        }
        
        //console.log("made one");
        
        return this.shot;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = () =>{
        
    }
}
