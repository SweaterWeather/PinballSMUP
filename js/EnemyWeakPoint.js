const WeakPoint =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        this.makeAnims();
        
        this.weakPoint=this.fetchParent().physics.add.sprite(x,y,"weakpoint");
        this.weakPoint.setCollideWorldBounds(true);    
        this.weakPoint.body.allowGravity = false;    
        
        this.weakPoint.setTarget = (target)=>{
            this.weakPoint.target = target;
        }        
        this.weakPoint.update = (dt) =>{
            //console.log(this.weakPoint.target);
            if(this.weakPoint.target){
                var distX = Math.abs(this.weakPoint.x - this.weakPoint.target.x);
                var distY = Math.abs(this.weakPoint.y - this.weakPoint.target.y);
                var dist = distX * distX + distY * distY;
                
                /*if(dist > 10)*/this.fetchParent().physics.moveToObject(this.weakPoint, this.weakPoint.target, dist/10);
                //else {
                //    this.weakPoint.x = this.weakPoint.target.x;
                //    this.weakPoint.y = this.weakPoint.target.y;
                //}
            }
        }
        
        return this.weakPoint;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = () =>{
        
    }
}
