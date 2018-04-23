const ArgusAnim =function(parent){
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
            key:'aidle',
            frames:this.fetchParent().anims.generateFrameNumbers('argus',{start:0,end:0}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'aattack2',
            frames:this.fetchParent().anims.generateFrameNumbers('argus',{start:1,end:1}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'aattack1',
            frames:this.fetchParent().anims.generateFrameNumbers('argus',{start:2,end:2}),
            frameRate:24,
            //repeat:0
        });
        this.fetchParent().anims.create({
            key:'aattack3',
            frames:this.fetchParent().anims.generateFrameNumbers('argus',{start:3,end:3}),
            frameRate:24,
            //repeat:0
        });
    }
}
