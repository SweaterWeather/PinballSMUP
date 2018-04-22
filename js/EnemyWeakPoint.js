const WeakPoint =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.weakPoint=this.fetchParent().physics.add.sprite(x,y,"weakpoint");
        this.weakPoint.setCollideWorldBounds(true);    
        this.weakPoint.body.allowGravity = false; 
        
        WeakPoint.speed = 1;
        
        this.weakPoint.setTarget = (target)=>{
            this.weakPoint.target = target;
        }        
        this.weakPoint.update = (dt) =>{
            //console.log(this.weakPoint.target);
            if(this.weakPoint.target){
                var distX = Math.abs(this.weakPoint.x - this.weakPoint.target.x);
                var distY = Math.abs(this.weakPoint.y - this.weakPoint.target.y);
                var dist = distX * distX + distY * distY;
                
                /*if(dist > 10)*/this.fetchParent().physics.moveToObject(this.weakPoint, this.weakPoint.target, dist/10 * WeakPoint.speed);
                //else {
                //    this.weakPoint.x = this.weakPoint.target.x;
                //    this.weakPoint.y = this.weakPoint.target.y;
                //}
            }
        }
        
        //this.fetchParent().physics.add.collider(this.fetchParent().ball, this.weakPoint);
        
        this.fetchParent().physics.add.overlap(this.fetchParent().ball, this.weakPoint, ()=>{
             this.fetchParent().ball.rebound(this.weakPoint);
        }, null, this);
        
        return this.weakPoint;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = () =>{
        
    }
}
