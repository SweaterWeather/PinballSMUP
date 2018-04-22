const PlayerShot =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y, right) =>{
        
        
        this.makeAnims();
        
        this.shot=this.fetchParent().physics.add.sprite(x,y,"enemyShots");
        this.shot.body.allowGravity = false;
        this.shot.allowDrag = false;
        
        this.fetchParent().playerShots.push(this.shot);
        this.shot.lifeSpan = .5;
        
        this.shot.setVelocityY(-500);
        this.shot.right = right;
        
        this.fetchParent().physics.add.overlap(this.fetchParent().ball, this.shot, ()=>{
            this.fetchParent().ball.overlapPlayerShot(this.shot.body.velocity.x)
            this.shot.destroy();
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
