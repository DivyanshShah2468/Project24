class Stone{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.3,
			friction:9,
			density:12
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.w,this.h)
			pop()
	}

}