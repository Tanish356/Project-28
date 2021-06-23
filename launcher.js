class Launcher{

    constructor (body,anchor){
   var options = {
       bodyA:body,
       pointB: anchor,
       stiffness:0.004,
       length: 1
   }
   this.bodyA=body;
   this.pointB=anchor;
   this.launcher=Constraint.create(options);
   World.add(world,this.launcher);
    }
    fly(){
        this.bodyA = null;
    }
    attach(){
        this.bodyA = body;
    }
}