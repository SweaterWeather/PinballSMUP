const WPTarget =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (x, y) =>{
        
        var spacing = game.canvas.width/7;
        var g=this.fetchParent().add.sprite(x * spacing + spacing/2,y * spacing + spacing/2,"blank");
        
        g.setAlpha(0.1);
        
        g.update= (x, y)=>{
            g.x = x * spacing + spacing/2;
            g.y = y * spacing + spacing/2;
        }
        
        return g;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}
