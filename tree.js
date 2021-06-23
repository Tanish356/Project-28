class tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        
    
    }
    display() {
        var position = this.body.position;
        push;
        translate (position.x,position.y);
        fill(green);
        imageMode(centre);
        image(this.image,0,-this.height/2,this.width);
        pop;

    }
}