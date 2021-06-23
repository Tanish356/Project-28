const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree,ground,stone,launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var mangoImg,stoneImg,treeImg,boyImg;

function preload(){
     mangoImg = loadImage ("sprites/mango.png");
     stoneImg = loadImage ("sprites/stone.png");
     treeImg = loadImage ("sprites/tree.png");
     boyImg = loadImage ("sprites/boy.png");
}

function setup() {
    createCanvas(1300,650);
    engine = Engine.create()
    world = Engine.world()

    mango1 = new mango(1100,100,30);
    mango2 = new mango(1170,130,30);
    mango3 = new mango(1010,140,30);
    mango4 = new mango(100,70,30);
    mango5 = new mango(1100,70,30);
    mango6 = new mango(1000,230,30);
    mango7 = new mango(900,230,40);
    mango8 = new mango(1140,150,40);
    mango9 = new mango(1100,230,40);
    mango10 = new mango(1200,200,40);
    mango11 = new mango(1120,50,40);
    stone = new stone(235,420,30);
    tree = new tree(1050,580);
    ground = new ground(width/2,600,width,20);
    launcher = new launcher(stone.body,{x:235,y:420});

}

function draw() {
 background(220);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  tree.display();
  ground.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

}
  function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.setPosition;
    stoneBodyPosition=lstone.body.setPosition;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
  }

  function keyPressed(){
    if(keyCode===32){
      Matter.body.setPosition(stone.body,{x:235,y:420})
      launcherObject.attach(stone.body);
    }
  }
  

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}