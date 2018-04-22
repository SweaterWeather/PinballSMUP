
const BossGun =function(parent){
    this.parent = parent;
    this.isChild = true;
    Gun.coolDown = 0;
    this.init = (x, y) =>{
        this.gun = this.fetchParent().physics.add.image(x,y,'blank');
        this.gun.setCollideWorldBounds(true);    
        this.gun.body.allowGravity = false; 
        this.gun.setScale(.5,.5);
        
        this.shouldFire = false;
        this.gun.coolDown = 1;
        
        this.gun.setTarget = (target)=>{
            this.gun.target = target;
        }        
        this.gun.update = (dt, type) =>{
            if(type){
                //new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, angle);
                if(this.gun.coolDown < 0){
                    switch(type){
                        case 'spreadDown':
                            this.gun.coolDown = .5;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 30  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 45  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 60  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 75  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 90  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 105  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 120  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 135  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 150  * Math.PI/180);
                            break;
                        case 'spreadLeft':
                            this.gun.coolDown = .5;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, -165  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 180  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 165  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 150  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 135  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 120  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 105  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 90  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 75  * Math.PI/180);
                            break;
                        case 'spreadRight':
                            this.gun.coolDown = .5;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, -15  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 0  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 15  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 30  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 45  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 60  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 75  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 90  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 105  * Math.PI/180);
                            break;
                        case 'beamDown':
                            this.gun.coolDown = 0;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 89  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 90  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 91  * Math.PI/180);
                            break;
                        case 'beamRight':
                            this.gun.coolDown = 0;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, -1  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 0  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 1  * Math.PI/180);
                            break;
                        case 'beamLeft':
                            this.gun.coolDown = 0;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 179  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 180  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, -179  * Math.PI/180);
                            break;
                        case 'beamDR':
                            this.gun.coolDown = 0;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 44  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 45  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 46  * Math.PI/180);
                            break;
                        case 'beamDL':
                            this.gun.coolDown = 0;
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 134  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 135  * Math.PI/180);
                            new EnemyShot(this.fetchParent()).init(this.gun.x, this.gun.y, 136  * Math.PI/180);
                            break;
                    }
                }
                else this.gun.coolDown-=dt;
            }
            else this.gun.coolDown = 1;
            //console.log(this.gun.coolDown);
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