var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var snowimg;
var boy,girl;
var boyImg, girlImg;

function preload(){
  snowimg=loadImage("snow.jpg");
  // boyImg = loadImage("boy.jpg");
  // girlImg = loadImage("girl.png");
}

function setup() {
  createCanvas(1600, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  // boy = createSprite(10,10,50,50);
  // girl= createSprite(200,10,50,50);
  // boy.addImage(boyImg);
  // girl.addImage(girlImg);  
}
 
function draw() {
  background(snowimg);
  //textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   
}