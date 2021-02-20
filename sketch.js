
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, ground,box1;


function setup() {
	createCanvas(1440,840);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,200,100,20);
	ground = new Ground(600,height,1700,30);
	box1 = new Box(1000,600,60,60);
	box2 = new Box (400 ,600, 60,30);
	circle1 = new Circle(600,600,10);
	circle2 = new Circle(602,600,10);
	circle3 = new Circle(604,600,10);
	circle4 = new Circle(606,600,10);
	circle5 = new Circle(608,600,10);
	circle6 = new Circle(610,600,10);
	circle7 = new Circle(612,600,10);
	circle8 = new Circle(614,600,10);
	circle9 = new Circle(616,600,10);
	circle10 = new Circle(618,600,10);
	circle11 = new Circle(1200,600,60);
  console.log(circle11);
  
  
}


function draw() {
  background("lavender");
  Engine.update(engine);
  console.log(box2.body.position.x)
  hammer.display();
  ground.display();
  box1.display();
  box2.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
  circle11.display();
  drawSprites();
 
}



