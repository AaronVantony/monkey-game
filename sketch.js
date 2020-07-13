//Global Variables
var stone,banana;
var monkey,Monkey_Image,stoneImage,bananaImage,
    groundImage;
var gameOver,resart,ground;
var gameoverImage,restartImage;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
  Monkey_Image= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");    
  
  groundImage = loadImage("jungle.jpg");
  bananaImage = loadImage("Banana.png");
  stoneImage = loadImage("stone.png");
  restartImage = loadImage("restart.png");
  gameoverImage = loadImage("gameOver.png");
  
 }

function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(200,400,50,50);
  monkey.addAnimation("Image",Monkey_Image);
  monkey.scale=0.1;
  
  ground=createSprite(200,200,50,50);
  ground.addImage(groundImage);
  
  banana=createSprite(300,300,50,50);
  banana.addImage(bananaImage);
  banana.scale=0.05; 
  banana.depth=ground.depth+1; 
  banana.velocityY=4;
  
  stone=createSprite(400,300,50,50);
  stone.addImage(stoneImage);
  stone.scale=0.08;
  stone.velocityY=4;
  
  restart=createSprite(300,300,50,50);
  restart.addImage(restartImage);
  restart.scale=0.5;
  restart.visible=false;
  
  gameOver=createSprite(300,250,50,50);
  gameOver.addImage(gameoverImage);
  gameOver.scale=0.7;
  gameOver.visible=false;
  
  monkey.depth=ground.depth+1; 
  score=0;
}


function draw(){
 background(255);
 edges = createEdgeSprites();
 

if(gameState=PLAY){  
  monkey.velocityX=0;

 if(keyDown("Left")){
   monkey.velocityX=-5;
 }
  
 if(keyDown("Right")){
   monkey.velocityX=5;
 } 
 monkey.collide(edges[0]); 
 monkey.collide(edges[1]);
  
  if(score==-1){
  gameState=END;
}
  
  if(banana.isTouching(monkey)){
    score=score+1; 
    banana.y=-10;
    banana.x=random(10,590);
  } 
  
  if(stone.isTouching(monkey)){
    score=score-1; 
    stone.y=-10;
    stone.x=random(10,590);
  } 
  
  
  switch(score){
    case 10: monkey.scale=0.12;
        break;
    case 20: monkey.scale=0.14;
        break;
    case 30: monkey.scale=0.16
        break;
    case 40: monkey.scale=0.18;
        break;
        default: break;  
  }
 SpawnBanana();
 Spawnstone();
  
} 
  if(gameState==END){
  stone.velocityY=0;
  banana.velocityY=0;
  gameOver.visible=true;
  restart.visible=true;
  
}
  console.log(gameState);
  //console.log(score);
  stroke("White");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  score.depth=ground.depth+1;
  
  
  drawSprites();
  text("score: "+score,300,10);
}
function SpawnBanana(){
   if(banana.y>=600){
     banana.y=-10;
     banana.x=random(10,590);
     banana.velocityY=random(2,6);
       
   }
} 
function Spawnstone(){
  if(stone.y>=600){
    stone.y=-10;
    stone.x=random(10,590);
    stone.velocityY=random(2,6);
    
  }  
}
function mousePressed() { 
 if (gameState==END){
     gameState=PLAY;
  }
}