
const Gun =function(parent){
    this.parent = parent;
    this.isChild = true;
    Gun.coolDown = 0;
    this.init = (x, y) =>{
        this.gun = this.fetchParent().physics.add.image(x,y,'blank');
        this.gun.setScale(.5,.5);
        
        
        this.gun.update = (dt, right) =>{
            this.fetchParent().physics.moveToObject(this.gun, this.fetchParent().player, 350);
            if(right) {
                this.gun.x = this.fetchParent().player.x + 75;
                if(this.fetchParent().input.activePointer.buttons == 2 && this.fetchParent().input.activePointer.isDown && Gun.coolDown < 0){
                    //console.log("right click");
                    new PlayerShot(this.fetchParent()).init(this.gun.x, this.gun.y, true).setVelocityX(this.fetchParent().player.body.velocity.x * 1.5);;
                    Gun.coolDown = .5;
                }
                else Gun.coolDown -= dt;
            }
            else {
                this.gun.x = this.fetchParent().player.x - 75;
                if(this.fetchParent().input.activePointer.buttons == 1 && this.fetchParent().input.activePointer.isDown && Gun.coolDown < 0){
                    //console.log("left click");
                    new PlayerShot(this.fetchParent()).init(this.gun.x, this.gun.y, false).setVelocityX(this.fetchParent().player.body.velocity.x * 1.5);
                    Gun.coolDown = .5;
                }
                else Gun.coolDown -= dt;
            }
            //console.log(Gun.coolDown);
        }
        
        return this.gun;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}