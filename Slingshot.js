class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA= body;
    }
    

    display(){
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position ;
            var pointB= pointB;
            push();
            strokeWeight(4)
            stroke(48, 22, 8);         
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
     
   
                
                
            
        }
    
    
}