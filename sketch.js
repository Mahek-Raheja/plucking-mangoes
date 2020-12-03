const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,chain;

function preload()
{
	boy = loadImage("sprites/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,600,width,20)
	tree = new Tree(100,590);
	stone = new Stone(920,400,2);
	mango1 = new Mango(200,200);
	mango2 = new Mango(300,100);
	mango3 = new Mango(400,200);
	mango4 = new Mango(350,150);
	mango5 = new Mango(270,200);
	mango6 = new Mango(250,250);
	mango7 = new Mango(200,100);
	mango8 = new Mango(100,200);

	launcher = new Launcher(stone.body,boy,{x:900,y:300});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  image(boy,900,300,150,400);
  launcher.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();  
  mango8.display(); 

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:920,y:400});
		launcher.attach(stone.body);
	}
}

