const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// Common for all levels 
var backgroundImg;
var LEVEL1 = 1;
var LEVEL2 = 2;
var gameState=LEVEL1;

// Level 1
var player1;
var ground1,ground2,ground3,ground4;
var door;

// Level 2
var boundary1;


function preload() {

  backgroundImg = loadImage("bg.jpg");
   
}

function setup() {
	var canvas = createCanvas(700,400);
	engine = Engine.create();
  world = engine.world;
  
  // Creating objects
  // Level 1
  ground1 = new Ground(200,360,750,10);
  ground2 = new Ground(640,260,130,10);
  ground3 = new Ground(5,250,10,800);
  ground4 = new  Ground(580,310,10,110);
  player1  = new Player(300,100,50,50);
  door    = new Door (690,215,30,80);
  
  // Level 2 
  // player2  = new Player2(50,290,30,30);
 
 	Engine.run(engine); 
}


function draw() {
  
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  player1.display();

  if (gameState === LEVEL1){
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();   
    door.display();
    
  } else {
    boundary1.displayLevel2();
   
  }
  
  if(player1.body.position.x > 620 && gameState === LEVEL1){
    console.log("/////////////GameState : ",gameState);
    console.log("////////////isTouching : ",isTouching(player1,door))
    if(isTouching(player1, door)){ 
     l2Scene();
    }
  }
  
  drawSprites();
 
}


function keyPressed() {
  
  // Controlling the player movement 
  console.log("Inside Key Pressed")
  // Level 1
  //if(gameState == LEVEL1){
    if (keyCode === RIGHT_ARROW) {

      Matter.Body.applyForce(player1.body,player1.body.position,{x:20,y:0});

    } 
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-40});

    }
    if (keyCode === LEFT_ARROW) {

      Matter.Body.applyForce(player1.body,player1.body.position,{x:-20,y:0});

    }
 // }
}

function l2Scene(){
  console.log("Inside switchScene");
 // backgroundImg = loadImage("l2.jpg")
  gameState=LEVEL2;
  boundary1 = new Ground(40,330,700,10);
  console.log(gameState);
  player1.displayLevel2(50,270);  
  
}


function isTouching(object1,object2){
  
  object1Pos=object1.body.position;
  object2Pos=object2.body.position;
 
  if (object1Pos.x - object2Pos.x < object2.width/2 + object1.width/2
    && object2Pos.x - object1Pos.x < object2.width/2 + object1.width/2
    && object1Pos.y - object2Pos.y < object2.height/2 + object1.height/2
    && object1Pos.y - object2Pos.y < object2.height/2 + object1.height/2) {
    
    return true;

  }
  else {
    return false;
  } 
}
 

