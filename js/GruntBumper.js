const GruntBumper =function(parent){
    //A referenct to whatever object created this one.
    this.parent = parent;
    //A simple tracker made to flag this object as NOT the game scene, in case any children are attached to it.
    this.isChild = true;
    this.init = (x, y) =>{
        //Make your game object here, and set up its animations and physics and stuff.
        //Be sure to return the game object when you are done!
        //If you have any custom values to ad to the objects update loop, do so here and then manually call the update from the ScenePlay scene.
        this.makeAnims();
        this.grunt=this.fetchParent().physics.add.sprite(x,y, "blank");
        this.setVelocityY(25);
        
        this.grunt.isDead = false;
        this.grunt.update = ()=>{
            if(this.grunt.isDead){
                
            }
        }
        this.grunt.overlapPlayerShot = () =>{
            this.grunt.isDead = true;
        }
    }
    //A retursive(?) function that loops through all custom game object lineage until it finds something that isn't a custom game object, and assumes that to be the play scene.
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = ()=>{
        
    }
}
}