const HydraAnim =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        
        this.makeAnims();
        
        this.shot=this.fetchParent().add.sprite(x,y,"hydra");
        
        return this.shot;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
    this.makeAnims = () =>{
        
        this.fetchParent().anims.create({
            key:'hidle',
            frames:this.fetchParent().anims.generateFrameNumbers('hydra',{start:0,end:0}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'hattack2',
            frames:this.fetchParent().anims.generateFrameNumbers('hydra',{start:1,end:2}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'hattack1',
            frames:this.fetchParent().anims.generateFrameNumbers('hydra',{start:3,end:4}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'hattack3',
            frames:this.fetchParent().anims.generateFrameNumbers('hydra',{start:5,end:5}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'hattack4',
            frames:this.fetchParent().anims.generateFrameNumbers('hydra',{start:6,end:6}),
            frameRate:24,
            //repeat:0
        });
    }
}
