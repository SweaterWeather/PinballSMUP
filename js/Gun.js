
const Gun =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        this.gun = this.fetchParent().physics.add.image(x,y,'blank');
        
        
        this.gun.update = (dt, right) =>{
            this.fetchParent().physics.moveToObject(this.gun, this.fetchParent().player, 250);
            if(right) {
                this.gun.x = this.fetchParent().player.x + 75;
                if(this.fetchParent().input.activePointer.buttons == 2 && this.fetchParent().input.activePointer.isDown){
                    console.log("right click");
                }
            }
            else {
                this.gun.x = this.fetchParent().player.x - 75;
                if(this.fetchParent().input.activePointer.buttons == 1 && this.fetchParent().input.activePointer.isDown){
                    console.log("left click");
                }
            }
        }
        
        return this.gun;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}