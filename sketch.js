//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);
  
  //creating the engine
  engine = Engine.create();

  //adding world to the engine
  world = engine.world;
  
  box1 = new Box(200,300,50,50);
  box2 = new Box(230,100,50,100);
  ground = new Ground (200,390,400,20);
}

function draw() {
  background(0);  

  //continously updating values in the engine
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  
}