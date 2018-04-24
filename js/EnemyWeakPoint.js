const WeakPoint =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y, isArgus) =>{
        
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
                
                
                if(!this.fetchParent().ball.activeInGame){
                    this.weakPoint.x = this.weakPoint.target.x;
                    this.weakPoint.y = this.weakPoint.target.y;
                    this.weakPoint.setVelocityX(0);
                    this.weakPoint.setVelocityY(0);
                }
                else this.fetchParent().physics.moveToObject(this.weakPoint, this.weakPoint.target, dist/10 * WeakPoint.speed);
            }
        }
        this.weakPoint.burst = ()=>{
            for(var i = 0; i < 10; i++){
                new EnemyShot(this.fetchParent()).init(this.weakPoint.x, this.weakPoint.y, Math.PI/180 * 360 / 10 * i);
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
        this.fetchParent().anims.create({
            key:'lookDown',
            frames:this.fetchParent().anims.generateFrameNumbers('hHead',{start:0,end:0}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'lookRight',
            frames:this.fetchParent().anims.generateFrameNumbers('hHead',{start:1,end:1}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'lookLeft',
            frames:this.fetchParent().anims.generateFrameNumbers('hHead',{start:2,end:2}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'attackDown',
            frames:this.fetchParent().anims.generateFrameNumbers('hHead',{start:3,end:3}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'attackRight',
            frames:this.fetchParent().anims.generateFrameNumbers('hHead',{start:4,end:4}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'attackLeft',
            frames:this.fetchParent().anims.generateFrameNumbers('hHead',{start:5,end:5}),
            frameRate:24,
            //repeat:0
        });
        
        this.fetchParent().anims.create({
            key:'bigEye',
            frames:this.fetchParent().anims.generateFrameNumbers('aEye',{start:0,end:0}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'littleEye',
            frames:this.fetchParent().anims.generateFrameNumbers('aEye',{start:1,end:1}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'leftEye',
            frames:this.fetchParent().anims.generateFrameNumbers('aEye',{start:2,end:2}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'rightEye',
            frames:this.fetchParent().anims.generateFrameNumbers('aEye',{start:3,end:3}),
            frameRate:24,
            //repeat:0
        });
        
    }
}
