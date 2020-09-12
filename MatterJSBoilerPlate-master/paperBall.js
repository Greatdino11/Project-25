class paperBall{
    constructor(x,y){
        var options = {
            restitution: 0.4,
            friction: 2.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,15, options);
        this.radius = 30;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        translate(pos.x-200, pos.y-200);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.radius+10, this.radius+10);
        pop();
    }
}