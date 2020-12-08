

class Ball{

    constructor(x,y,width, height,angle){
        var options ={
            restitution: 0.8,
            density : 1,
            friction:1,

        }
        this.body= Bodies.rectangle(y,y,width,height,options);

        this.width=width;
        this.height=height;
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke ("green")
        fill(255);

        ellipse(0,0,this.width,this.height);     
        pop();
        
    }
}