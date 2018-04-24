const Ball =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.ball=this.fetchParent().physics.add.sprite(x,y,"ball");
        this.ball.setBounce(1,1);
        this.ball.setCollideWorldBounds(true);
        //this.ball.allowDrag = false;
        this.ball.setScale(.5,.5);
        
        this.ball.activeInGame = false;
        
        this.ball.setVelocityX(0);
        this.ball.setVelocityY(-500);
        this.ball.reboundCooldown = 0;
        
        this.ball.update = (dt) =>{
            if(!this.ball.activeInGame){
                this.ball.setVelocityX(0);
                this.ball.setVelocityY(0);
                this.ball.x=this.fetchParent().player.x;
                this.ball.y=this.fetchParent().player.y - 50;
                
                //this.fetchParent().input.keyboard.addKeyCapture(32);
                //var keys = this.fetchParent().input.keyboard.createCursorKeys();
                if(this.fetchParent().input.activePointer.buttons == 4 && this.fetchParent().input.activePointer.isDown){
                    this.ball.activeInGame = true;
                    this.ball.setVelocityY(-500);
                }
            }
            this.ball.reboundCooldown -= dt;
            if(this.ball.y >= 700){
                this.fetchParent().player.damage();
                this.ball.activeInGame = false;
            }
        }
        this.ball.overlapPlayerShot = (velocityX) =>{
            this.ball.setVelocityY(-500);
            //console.log(velocityX);
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
            this.fetchParent().boss.damage();
            this.fetchParent().score += 500;
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
