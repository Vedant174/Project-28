
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage("sprites/boy.png")
}

var boy;

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(800,420,60)
	tree = new Tree(800,420,750,750)
	stone = new Stone(-770,160,50)
	ground = new Ground(600,798,1200,50)

	Engine.run(engine);
  
}


function draw() {

  background(255);
  text("x: "+mouseX+" , y: "+mouseY, mouseX,mouseY)
  rectMode(CENTER);
  ground.display();
  tree.display();
  mango1.display();
  stone.display();

  
  image(boy, -700,250,200,400)

  drawSprites();
 
}



