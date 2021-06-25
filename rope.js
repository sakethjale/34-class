class Rope{
    constructor(sunny,Point){
        var opt={
            bodyA:sunny,
            pointB:Point,
            stiffness:1.2,
             length:250
        }
        this.pointB=Point
        this.rope=Constraint.create(opt)
        World.add(world,this.rope)
    }
     display(){
         line (this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
     }
   
    
}