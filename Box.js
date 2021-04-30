class Box{
    constructor(x,y,width,height){
        //properties
        var options={
            restitution: 0.1,
            density: 1,
            friction: 0.3
        }

        //create the body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        //add the body to the world
        World.add(world,this.body);
    }

    //functions for the object
    display(){

        //variable to store body's position
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        fill("white");
        translate(pos.x,pos.y);
        rotate(angle);
        //coordinate to be taken in the center
        rectMode(CENTER);

        //using rectangle to see the body
        rect(0,0,this.width,this.height);
        pop();
    }
}