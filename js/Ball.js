const Ball =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.ball=this.fetchParent().physics.add.sprite(x,y,"ball");
        this.ball.setBounce(1,1);
        this.ball.setCollideWorldBounds(true);
        //this.ball.allowDrag = false;
        
        this.ball.setVelocityX(25);
        this.ball.setVelocityY(25);
        this.ball.reboundCooldown = 0;
        
        this.ball.update = (dt) =>{
            this.ball.reboundCooldown -= dt;
        }
        this.ball.overlapPlayerShot = (velocityX) =>{
            this.ball.setVelocityY(-500);
            console.log(velocityX);
            this.ball.setVelocityX(this.ball.body.velocity.x + velocityX)
        }
        this.ball.rebound = (other)=>{
            if(this.ball.reboundCooldown > 0)return;
            var veloc = Math.abs(this.ball.body.velocity.x) + Math.abs(this.ball.body.velocity.y);
            var angle = Math.atan2(this.ball.y - other.y, this.ball.x - other.x);
            
            this.ball.setVelocityY(Math.sin(angle)*veloc/1.5);
            this.ball.setVelocityX(Math.cos(angle)*veloc/1.5);
            //this.ball.setVelocityY(-this.ball.body.velocity.y);
            //this.ball.setVelocityX(-this.ball.body.velocity.x);
            this.ball.reboundCooldown = .1;
            //console.log(angle);
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
