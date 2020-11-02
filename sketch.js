
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1, rope2, rope3, rope4, rope5;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bobObj1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bobObj2 = new Bob(posX - bobDiameter,posY, bobDiameter);
	bobObj3 = new Bob(posX,posY,bobDiameter);
	bobObj4 = new Bob(posX +  bobDiameter, posY, bobDiameter);
	bobObj5 = new Bob(posX + bobDiameter * 2, posY, bobDiameter);

	roof = new Roof(width/2, height/4, 250, 15);

	rope1 = new Rope(bobObj1.body, roofObj.body,-bobDiameter*2,0 );
	rope2 = new Rope(bobObj2.body, roofObj.body,-bobDiameter*2,0 );
	rope3 = new Rope(bobObj3.body,roofObj.body,0,0); 
 	rope4 = new Rope(bobObj4.body,roofObj.body,bobDiameter*1,0); 
	rope5 = new Rope(bobObj5.body,roofObj.body,bobDiameter*2,0);




	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites();
 
}



