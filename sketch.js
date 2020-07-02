const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var stand, slingshot;
var block1, block2, block3, block4;
var block5, block6, block7, block8;
var block9, block10, block11, block12;
var block13, block14, block15, block16, polygon;
var t = false;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  polygon = Bodies.circle(150, 100, 30);
  World.add(world, polygon);
  slingshot = new SlingShot(polygon, {x: 150, y: 100})
  block1 = new Box(350, 280, 43, 35);
  block2 = new Box(393, 280, 43, 35);
  block3 = new Box(436, 280, 43, 35);
  block4 = new Box(479, 280, 43, 35);
  block5 = new Box(522, 280, 43, 35);
  block6 = new Box(565, 280, 43, 35);
  block7 = new Box(608, 280, 43, 35);
  block8 = new Box(393, 245, 43, 35);
  block9 = new Box(436, 245, 43, 35);
  block10 = new Box(479, 245, 43, 35);
  block11 = new Box(522, 245, 43, 35);
  block12 = new Box(565, 245, 43, 35);
  block13 = new Box(436, 210, 43, 35);
  block14 = new Box(479, 210, 43, 35);
  block15 = new Box(522, 210, 43, 35);
  block16 = new Box(479, 175, 43, 35);
  
  stand = new Ground(479, 300, 400, 10)
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block10.display();
  block12.display();
  block8.display();
  block9.display();
  block11.display();
  block16.display();
  block13.display();
  block14.display();
  block15.display();
  if(t){
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY})
  }
  
  slingshot.display();
  ellipse(polygon.position.x, polygon.position.y, 60, 60);
  stand.display();
}

function mouseDragged(){
  t = true;
}

function mouseReleased(){
  t = false;
  slingshot.fly();
}

function keyPressed(){
  if(keyCode == 32){
      slingshot.attach(polygon);
  }
}