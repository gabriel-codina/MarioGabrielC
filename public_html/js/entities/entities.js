// TODO

var moonWalk = "false";
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {

        this._super(me.Entity, 'init', [x, y, {
                image: "mario",
                spritewidth: 128,
                spriteheight: 128,
                width: 30,
                height: 128,
                getShape: function() {
                    return(new me.Rect(0, 0, 1, 128)).toPolygon();
                }
            }]);

        this.renderable.addAnimation("idle", [3]);
        this.renderable.addAnimation("smallWalk", [8, 9, 10, 11, 12, 13], 80);

        this.renderable.setCurrentAnimation("idle");

        this.body.setVelocity(5, 20);
    },
    update: function(delta) {
        
        
        if (me.input.isKeyPressed("right")) {
            
            this.flipX(false);
            this.body.vel.x += this.body.accel.x * me.timer.tick;
        }
        else if (me.input.isKeyPressed("left")) {
            if(moonWalk == "true"){
                console.log("did it 2");
                
                this.flipX(false);
            }
            else if(moonWalk == "false"){
                this.flipX(true);
            }
            this.flipX(true);
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
        }
        
        else if (me.input.isKeyPressed("up")) {
            me.input.unbindKey(me.input.KEY.SPACE);
           var code = prompt("whats yor cheat code?");
           
           if(code == "moonwalk"){
               console.log("did it");
            moonWalk === "true";
           };
            this.body.vel.y += this.body.accel.y * me.timer.tick;
           me.input.bindKey(me.input.KEY.SPACE, "up");
        }
        
        else {
            this.body.vel.x = 0;
        }
        
        this.body.update(delta);
        me.collision.check(this, true, this.collideHandler.bind(this), true);

        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        }
        else if (this.body.vel.y !== 0) {
            if (!this.renderable.isCurrentAnimation("smallWalk")) {
                this.renderable.setCurrentAnimation("smallWalk");
                this.renderable.setAnimationFrame();
            }
        }
        else {
            this.renderable.setCurrentAnimation("idle");
        }


        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    collideHandler: function(response){
        
    }
});

game.LevelTrigger = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, settings]);
        this.body.onCollision = this.onCollision.bind(this);
        this.level = settings.level;
    },
    onCollision: function() {
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
    }


});