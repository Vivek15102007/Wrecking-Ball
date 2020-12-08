const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, constraint;


function setup() {
  var canvas =createCanvas(1200,400);
 // createSprite(400, 400, 50, 50);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,height,1200,20);

 box1 = new Box(850,320,70,70);
 box2 = new Box(920,320,70,70);
 box3 = new Box(780,320,70,70);
 box4 = new Box(710,320,70,70);
 box5 = new Box(990,320,70,70);
 box6 = new Box(1060,320,70,70);
 box7 = new Box(880,250,70,70);
 box8 = new Box(950,250,70,70);
 box9 = new Box(810,250,70,70);
 box10 = new Box(740,250,70,70);
 box11= new Box(1020,250,70,70);
 box12 = new Box(920,180,70,70);
 box13 = new Box(840,180,70,70);
 box14 = new Box(770,180,70,70);
 box15= new Box(990,180,70,70);
 box16 = new Box(880,110,70,70);
 box17 = new Box(815,110,70,70);
 box18= new Box(950,110,70,70);
 box19 = new Box(880,40,50,45);
 box20= new Box(930,40,50,45);
 box21= new Box(905,5,50,30);
 ball= new Ball(600, 200, 100, 100 )
 constraint = new SlingShot(ball.body, {x:mouseX, y: mouseY})
}

function draw() {
  background(0);
  Engine.update(engine);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  ground.display();
  ball.display();
  constraint.display();

  
}