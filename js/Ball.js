const Ball =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.ball=this.fetchParent().physics.add.sprite(x,y,"ball");
        this.ball.setBounce(1,1);
        this.ball.setCollideWorldBounds(true);
        this.ball.allowDrag = false;
        
        this.ball.setVelocityX(25);
        this.ball.setVelocityY(25);
        
        this.ball.update = (dt) =>{
            
        }
        this.ball.overlapPlayerShot = (velocityX) =>{
            this.ball.setVelocityY(-750);
            console.log(velocityX);
            this.ball.setVelocityX(this.ball.body.velocity.x + velocityX)
        }
        
        return this.ball;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = () =>{
        
    }
}
