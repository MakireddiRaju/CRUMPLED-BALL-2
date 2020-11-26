
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,side1
var ball,image;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball= new Ball(570,460,10,10);
	ground = new Ground(400,600,1000,20);
	side1= new Dust(400,240,100)
	side2=new Dust (310,240,100)
  ground2= new Ground(750,570,20,10000)
  ground3=new Ground(600,5,100000,20)
  ground4=new Ground(200,5,20,600)
	ground5=new Ground(350,300,300,20)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
		}
}
function draw() {
background(0);
ground.display(); 
ball.display();
side1.display();
side2.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
}