const Grid =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = () =>{
        
        this.grid =[[this.g(0,0),this.g(1,0),this.g(2,0),this.g(3,0),this.g(4,0),this.g(5,0),this.g(6,0)],
                    [this.g(0,1),this.g(1,1),this.g(2,1),this.g(3,1),this.g(4,1),this.g(5,1),this.g(6,1)],
                    [this.g(0,2),this.g(1,2),this.g(2,2),this.g(3,2),this.g(4,2),this.g(5,2),this.g(6,2)],
                    [this.g(0,3),this.g(1,3),this.g(2,3),this.g(3,3),this.g(4,3),this.g(5,3),this.g(6,3)],
                    [this.g(0,4),this.g(1,4),this.g(2,4),this.g(3,4),this.g(4,4),this.g(5,4),this.g(6,4)],
                    [this.g(0,5),this.g(1,5),this.g(2,5),this.g(3,5),this.g(4,5),this.g(5,5),this.g(6,5)],
                    [this.g(0,6),this.g(1,6),this.g(2,6),this.g(3,6),this.g(4,6),this.g(5,6),this.g(6,6)]];
        
        
        
        return this.grid;
    }
    this.g = (x,y) =>{
        return new WPTarget(this).init(x,y);
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}
