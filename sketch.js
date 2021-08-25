const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var base1, base2
var player
var player2

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   base1 = new Base(200,random(450,height-300),300,300)
   playerBase = new PlayerBase(1200,random(450,height-300),300,300)
   player = new Player(200,243,80,150)
   player2 = new Player(1200,240,80,150)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   base1.display()
    playerBase.display()
   //display Player and computerplayer
    player.display()
    player2.display()
}
