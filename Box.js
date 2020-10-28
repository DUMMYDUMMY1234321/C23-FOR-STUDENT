class Box
{
    constructor(x,y,width,height)
    {

        var option = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }


    display()
    {

        var p = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(p.x , p.y , this.width , this.height)

    }



}