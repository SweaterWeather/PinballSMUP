const Argus =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (grid) =>{
        
        var c = {};
        
        c.w1 = new WeakPoint(this).init(0, 0);
        c.w2 = new WeakPoint(this).init(0, 0);
        c.w3 = new WeakPoint(this).init(0, 0);
        c.w4 = new WeakPoint(this).init(0, 0);
        
        c.countDown = 5;
        WeakPoint.speed = 1;
        
        var attacks=[
            [[null, null, null, c.w1, null, null, null],
            [null, c.w3, null, null, null, c.w4, null],
            [null, null, null, c.w2, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
            
            [[null, null, null, null, c.w1, c.w4, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, c.w2, null],
            [null, null, null, c.w3, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
            
            [[null, c.w3, c.w1, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, c.w2, null, null, null, null, null],
            [null, null, null, c.w4, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
            
            [[null, null, null, c.w1, null, null, null],
            [null, null, null, c.w2, null, null, null],
            [null, null, c.w3, null, c.w4, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
        ];
        
        c.attacks = attacks;
        c.lastMove = 1;
        c.attack = () =>{
            if(c.lastMove == 0){
                var rand = Math.floor(Math.random()*(c.attacks.length-1))+1;
                c.lastMove = rand;
                console.log(rand);
            }
            else c.lastMove = 0;
            c.attacks[c.lastMove].forEach((y, indexY)=>{
                y.forEach((x, indexX)=>{
                     if(x != null)c.attacks[c.lastMove][indexY][indexX].setTarget(grid[indexY][indexX]);
                });
            });
        }
        c.update = (dt) =>{
            c.w1.update(dt);
            c.w2.update(dt);
            c.w3.update(dt);
            c.w4.update(dt);
            
            c.countDown-=dt;
            if(c.countDown < 0){
                c.countDown = 5;
                c.attack();
            }
        }
        
        return c;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}

const Hydra =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (grid) =>{
        
        var c = {};
        
        c.w1 = new WeakPoint(this).init(0, 0);
        c.w2 = new WeakPoint(this).init(0, 0);
        c.w3 = new WeakPoint(this).init(0, 0);
        c.w4 = new WeakPoint(this).init(0, 0);
        
        c.countDown = 5;
        WeakPoint.speed = .25;
        
        var attacks=[
            [[null, null, null, null, null, null, null],
            [null, null, c.w2, null, c.w3, null, null],
            [c.w1, null, null, null, null, null, c.w4],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
            
            [[null, null, null, null, c.w2, c.w4, null],
            [null, c.w1, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, c.w3, null, null]],
            
            [[null, c.w1, c.w3, null, null, null, null],
            [null, null, null, null, null, c.w4, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, c.w2, null, null, null, null]],
            
            [[null, c.w2, null, null, null, c.w3, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [c.w4, null, null, null, null, null, c.w1]],
            
            [[c.w1, null, c.w2, null, c.w3, null, c.w4],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
        ];
        
        c.attacks = attacks;
        c.lastMove = 1;
        c.attack = () =>{
            if(c.lastMove == 0){
                var rand = Math.floor(Math.random()*(c.attacks.length-1))+1;
                c.lastMove = rand;
                console.log(rand);
            }
            else c.lastMove = 0;
            c.attacks[c.lastMove].forEach((y, indexY)=>{
                y.forEach((x, indexX)=>{
                     if(x != null)c.attacks[c.lastMove][indexY][indexX].setTarget(grid[indexY][indexX]);
                });
            });
        }
        c.update = (dt) =>{
            c.w1.update(dt);
            c.w2.update(dt);
            c.w3.update(dt);
            c.w4.update(dt);
            
            c.countDown-=dt;
            if(c.countDown < 0){
                c.countDown = 5;
                c.attack();
            }
        }
        
        return c;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}
