var BossHp = 100;
var MaxHP = 100;

const Argus =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (grid) =>{
        BossHp = 100;
        MaxHP = 100;
        
        var c = {};
        
        c.w1 = new WeakPoint(this).init(0, 0);
        c.w2 = new WeakPoint(this).init(0, 0);
        c.w3 = new WeakPoint(this).init(0, 0);
        c.w4 = new WeakPoint(this).init(0, 0);
        
        c.s1 = new BossGun(this).init();
        c.s2 = new BossGun(this).init();
        
        c.countDown = 5;
        c.burstCountDown = 1;
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
            [null, null, null, c.s1, null, null, null]],
            
            [[null, c.w3, c.w1, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, c.w2, null, null, null, null, null],
            [null, null, null, c.w4, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, c.s2, null, null, null]],
            
            [[null, null, null, c.w1, null, null, null],
            [null, null, null, c.w2, null, null, null],
            [null, null, c.w3, null, c.w4, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, c.s1, null, c.s2, null, null],
            [null, null, null, null, null, null, null]],
        ];
        
        c.attacks = attacks;
        c.lastMove = 1;
        c.attack = () =>{
            if(c.lastMove == 0){
                var rand = Math.floor(Math.random()*(c.attacks.length-1))+1;
                c.lastMove = rand;
                
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
            
            switch(c.lastMove){
                case 0:
                    c.s1.update(dt);
                    c.s2.update(dt);
                    break;
                case 1:
                    c.s1.update(dt, 'spreadRight');
                    c.s2.update(dt);
                    break;
                case 2:
                    c.s2.update(dt, 'spreadLeft');
                    c.s1.update(dt);
                    break;
                case 3:
                    c.s1.update(dt, 'spreadDown');
                    c.s2.update(dt, 'spreadDown');
                    break;
            }
            //c.s1.update(dt);
            //c.s2.update(dt);
            
            c.countDown-=dt;
            if(c.countDown < 0){
                c.countDown = 5;
                c.attack();
            }
            
            if(c.lastMove == 0){
                c.burstCountDown-=dt;
                if(c.burstCountDown < 0){
                    c.burstCountDown = 1;
                    switch(Math.floor(Math.random()*4)){
                        case 0:
                            c.w1.burst();
                            break;
                        case 1:
                            c.w2.burst();
                            break;
                        case 2:
                            c.w3.burst();
                            break;
                        case 3:
                            c.w4.burst();
                            break;
                    }
                }
            }
        }
        c.damage = () =>{
            BossHp--;
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
        BossHp = 100;
        MaxHP = 100;
        
        var c = {};
        
        c.w1 = new WeakPoint(this).init(0, 0);
        c.w2 = new WeakPoint(this).init(0, 0);
        c.w3 = new WeakPoint(this).init(0, 0);
        c.w4 = new WeakPoint(this).init(0, 0);
        
        c.s1 = new BossGun(this).init();
        c.s2 = new BossGun(this).init();
        c.s3 = new BossGun(this).init();
        c.s4 = new BossGun(this).init();
        
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
            [null, c.s1, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, c.w3, null, null],
            [null, null, null, c.s3, null, null, null]],
            
            [[null, c.w1, c.w3, null, null, null, null],
            [null, null, null, null, null, c.w4, null],
            [null, null, null, null, null, c.s4, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, c.w2, null, null, null, null],
            [null, null, null, c.s2, null, null, null]],
            
            [[null, c.w2, null, null, null, c.w3, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [c.w4, null, null, null, null, null, c.w1],
            [null, c.s4, null, null, null, c.s1, null]],
            
            [[c.w1, null, c.w2, null, c.w3, null, c.w4],
            [c.s1, null, c.s2, null, c.s3, null, c.s4],
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
            
            switch(c.lastMove){
                case 0:
                    c.s1.update(dt);
                    c.s2.update(dt);
                    c.s3.update(dt);
                    c.s4.update(dt);
                    break;
                case 1:
                    c.s1.update(dt, 'beamDown');
                    c.s2.update(dt);
                    c.s3.update(dt, 'beamDL');
                    c.s4.update(dt);
                    break;
                case 2:
                    c.s4.update(dt, 'beamDown');
                    c.s2.update(dt, 'beamDR');
                    c.s3.update(dt);
                    c.s1.update(dt);
                    break;
                case 3:
                    c.s1.update(dt, 'beamDL');
                    c.s4.update(dt, 'beamDR');
                    c.s3.update(dt);
                    c.s2.update(dt);
                    break;
                case 4:
                    c.s1.update(dt, 'beamDown');
                    c.s4.update(dt, 'beamDown');
                    c.s3.update(dt, 'beamDown');
                    c.s2.update(dt, 'beamDown');
                    break;
            }
            
            c.countDown-=dt;
            if(c.countDown < 0){
                c.countDown = 5;
                c.attack();
            }
        }
        c.damage = () =>{
            BossHp--;
        }
        
        return c;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}
