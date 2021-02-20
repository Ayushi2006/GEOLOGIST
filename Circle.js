class Circle{
    constructor(x, y,radius) {
      var options = {
          'restitution':0.4,
          'friction':0.3,
          'density':0.4
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(pos.x, pos.y,this.radius);
      //pop();
    }
  };