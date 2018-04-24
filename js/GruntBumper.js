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
        this.vx = 1;
        this.grunt.setVelocityX(this.vx);
        this.grunt.setVelocityY(2);
        this.grunt.setCollideWorldBounds(true);
        this.grunt.body.allowGravity = false;
        this.grunt.body.allowDrag = false;
        
        this.fetchParent().grunts.push(this.grunt);
        
        this.grunt.isDead = false;
        this.grunt.update = ()=>{
            if(this.grunt.isDead){
                
            }
        }
        this.fetchParent().physics.add.overlap(this.fetchParent().ball, this.grunt, ()=>{
            this.fetchParent().ball.overlapPlayerShot(this.grunt.body.velocity.x);
            console.log("Bumper is Dead:");
            this.grunt.destroy();
        }, null, this);
    }
    //A retursive(?) function that loops through all custom game object lineage until it finds something that isn't a custom game object, and assumes that to be the play scene.
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = ()=>{
        
    };
    this.update = (dt)=>{
        
    };
}
