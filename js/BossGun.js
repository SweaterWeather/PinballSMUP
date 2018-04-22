
const BossGun =function(parent){
    this.parent = parent;
    this.isChild = true;
    Gun.coolDown = 0;
    this.init = (x, y) =>{
        this.gun = this.fetchParent().physics.add.image(x,y,'blank');
        this.gun.setCollideWorldBounds(true);    
        this.gun.body.allowGravity = false; 
        this.gun.setScale(.5,.5);
        
        
        
        this.gun.setTarget = (target)=>{
            this.gun.target = target;
        }        
        this.gun.update = (dt) =>{
            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, true).setVelocityX(this.fetchParent().player.body.velocity.x * 1.5);
            //console.log(this.weakPoint.target);
            if(this.gun.target){
                var distX = Math.abs(this.gun.x - this.gun.target.x);
                var distY = Math.abs(this.gun.y - this.gun.target.y);
                var dist = distX * distX + distY * distY;
                
                this.fetchParent().physics.moveToObject(this.gun, this.gun.target, dist/10 * WeakPoint.speed);
            }
        }
        
        this.gun.setAlpha(.1);
        
        return this.gun;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}