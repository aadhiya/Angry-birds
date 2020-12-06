const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world, object1
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
ground=new Ground(400,393,800,20)
box1=new Box(200,300,50,50)
box2=new Box(100,150,50,50)
}
function draw() {
  background(0);  
 ground.display()
box1.display()
box2.display()
} 