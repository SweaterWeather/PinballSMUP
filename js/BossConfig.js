var BossHp = 100;
var MaxHP = 100;

const Argus =function(parent){
    this.parent = parent;
    this.isChild = true;
    this.init = (grid) =>{
        BossHp = 50;
        MaxHP = 50;
        
        var c = {};
        
        c.anim = new ArgusAnim(this).init(0,0).setOrigin(0,0);
        
        c.w1 = new WeakPoint(this).init(0, 0, true);
        c.w2 = new WeakPoint(this).init(0, 0, true);
        c.w3 = new WeakPoint(this).init(0, 0, true);
        c.w4 = new WeakPoint(this).init(0, 0, true);
        
        c.s1 = new BossGun(this).init();
        c.s2 = new BossGun(this).init();
        
        c.shouldAnimate = true;
        
        c.countDown = 5;
        c.burstCountDown = 1;
        WeakPoint.speed = 1;
        
        var attacks=[
            [[null, null, null, null, null, null, null],
            [null, null, null, c.w1, null, null, null],
            [null, c.w3, null, null, null, c.w4, null],
            [null, null, null, c.w2, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
            
            [[null, null, null, null, null, c.w4, null],
            [null, null, null, null, c.w1, null, null],
            [null, null, null, null, null, c.w2, null],
            [null, null, null, c.w3, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, c.s1, null, null, null]],
            
            [[null, c.w3, null, null, null, null, null],
            [null, null, c.w1, null, null, null, null],
            [null, c.w2, null, null, null, null, null],
            [null, null, null, c.w4, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, c.s2, null, null, null]],
            
            [[null, null, null, null, null, null, null],
            [null, null, null, c.w1, null, null, null],
            [null, null, c.w3, null, c.w4, null, null],
            [null, null, null, c.w2, null, null, null],
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
                    c.anim.anims.play('aidle', true);
                    
                    c.w1.anims.play('bigEye', true);
                    c.w2.anims.play('littleEye', true);
                    c.w3.anims.play('littleEye', true);
                    c.w4.anims.play('littleEye', true);
                    break;
                case 1:
                    c.s1.update(dt, 'spreadRight');
                    c.s2.update(dt);
                    c.anim.anims.play('aattack2', true);
                    
                    c.w1.anims.play('bigEye', true);
                    c.w2.anims.play('rightEye', true);
                    c.w3.anims.play('littleEye', true);
                    c.w4.anims.play('rightEye', true);
                    break;
                case 2:
                    c.s2.update(dt, 'spreadLeft');
                    c.s1.update(dt);
                    c.anim.anims.play('aattack1', true);
                    
                    c.w1.anims.play('bigEye', true);
                    c.w2.anims.play('leftEye', true);
                    c.w3.anims.play('leftEye', true);
                    c.w4.anims.play('littleEye', true);
                    break;
                case 3:
                    c.s1.update(dt, 'spreadDown');
                    c.s2.update(dt, 'spreadDown');
                    c.anim.anims.play('aattack3', true);
                    
                    c.w1.anims.play('bigEye', true);
                    c.w2.anims.play('littleEye', true);
                    c.w3.anims.play('rightEye', true);
                    c.w4.anims.play('leftEye', true);
                    break;
            }
            //c.s1.update(dt);
            //c.s2.update(dt);
            
            c.countDown-=dt;
            if(c.countDown < 0){
                c.countDown = (c.lastMove == 0)? 5 : 20;
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
        
        c.destroy = () =>{
            c.w1.destroy();
            c.w2.destroy();
            c.w3.destroy();
            c.w4.destroy();
            c.s1.destroy();
            c.s2.destroy();
            c.anim.destroy();
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
        BossHp = 50;
        MaxHP = 50;
        
        var c = {};
        
        c.anim = new HydraAnim(this).init(0,0).setOrigin(0,0);
        
        c.w1 = new WeakPoint(this).init(0, 0, false);
        c.w2 = new WeakPoint(this).init(0, 0, false);
        c.w3 = new WeakPoint(this).init(0, 0, false);
        c.w4 = new WeakPoint(this).init(0, 0, false);
        
        c.s1 = new BossGun(this).init();
        c.s2 = new BossGun(this).init();
        c.s3 = new BossGun(this).init();
        c.s4 = new BossGun(this).init();
        
        c.countDown = 5;
        c.burstCountDown = 1;
        WeakPoint.speed = 1;
        
        var attacks=[
            [[null, null, null, null, null, null, null],
            [null, null, c.w2, null, c.w3, null, null],
            [c.w1, null, null, null, null, null, c.w4],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]],
            
            [[null, null, null, null, c.w2, c.w3, null],
            [null, c.w1, null, null, null, null, null],
            [null, c.s1, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, c.w4, null, null],
            [null, null, null, c.s3, null, null, null]],
            
            [[null, c.w2, c.w3, null, null, null, null],
            [null, null, null, null, null, c.w4, null],
            [null, null, null, null, null, c.s4, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, c.w1, null, null, null, null],
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
                //console.log(rand);
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
                    
                    c.w1.anims.play('lookRight', true);
                    c.w2.anims.play('lookDown', true);
                    c.w3.anims.play('lookDown', true);
                    c.w4.anims.play('lookLeft', true);
                    
                    c.shouldAnimate = true;
                    c.anim.anims.play('hidle', true);
                    break;
                case 1:
                    c.s1.update(dt, 'beamDown');
                    c.s2.update(dt);
                    c.s3.update(dt, 'beamDL');
                    c.s4.update(dt);
                    if(c.shouldAnimate){
                        c.anim.anims.play('hattack1', true);
                        c.shouldAnimate = false;
                    }
                    
                    c.w1.anims.play('attackDown', true);
                    c.w2.anims.play('lookLeft', true);
                    c.w3.anims.play('lookLeft', true);
                    c.w4.anims.play('attackLeft', true);
                    break;
                case 2:
                    c.s4.update(dt, 'beamDown');
                    c.s2.update(dt, 'beamDR');
                    c.s3.update(dt);
                    c.s1.update(dt);
                    if(c.shouldAnimate){
                        c.anim.anims.play('hattack2', true);
                        c.shouldAnimate = false;
                    }
                    
                    c.w1.anims.play('attackRight', true);
                    c.w2.anims.play('lookRight', true);
                    c.w3.anims.play('lookRight', true);
                    c.w4.anims.play('attackDown', true);
                    break;
                case 3:
                    c.s1.update(dt, 'beamDL');
                    c.s4.update(dt, 'beamDR');
                    c.s3.update(dt);
                    c.s2.update(dt);
                    c.anim.anims.play('hattack3', true);
                    
                    c.w1.anims.play('attackLeft', true);
                    c.w2.anims.play('lookDown', true);
                    c.w3.anims.play('lookDown', true);
                    c.w4.anims.play('attackRight', true);
                    break;
                case 4:
                    c.s1.update(dt, 'beamDown');
                    c.s4.update(dt, 'beamDown');
                    c.s3.update(dt, 'beamDown');
                    c.s2.update(dt, 'beamDown');
                    c.anim.anims.play('hattack4', true);
                    
                    c.w1.anims.play('attackDown', true);
                    c.w2.anims.play('attackDown', true);
                    c.w3.anims.play('attackDown', true);
                    c.w4.anims.play('attackDown', true);
                    break;
            }
            
            c.countDown-=dt;
            if(c.countDown < 0){
                c.countDown = (c.lastMove == 0)? 5 : 10;
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
        
        c.destroy = () =>{
            c.w1.destroy();
            c.w2.destroy();
            c.w3.destroy();
            c.w4.destroy();
            c.s1.destroy();
            c.s2.destroy();
            c.s3.destroy();
            c.s4.destroy();
            c.anim.destroy();
        }
        
        return c;
    }
    this.fetchParent = () =>{
        if(!this.parent.isChild) return this.parent;
        else return this.parent.fetchParent();
    }
}
