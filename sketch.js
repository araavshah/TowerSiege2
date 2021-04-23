const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //ground = new Ground();
  stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  ball = Bodies.circle(50,200,20); 
  World.add(world,ball);
  slingShot = new SlingShot(this.ball, {x:100, y: 200})

}
function draw() {
  background(56,44,44); 
  Engine.update(engine);
                                           

  

  //ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  slingShot.display();

  strokeWeight(2);
  stroke(15);
  fill("lightyellow");
  textSize(20);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100,30)
 
  imageMode(CENTER) 
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){ 
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); 
} 
function mouseReleased(){ 
  slingShot.fly(); 
}

function keyPressed()
{
  if(keyCode===32)
  {
    //Matter.Body.setPosition(this.body,{x:100,y:200});
     slingShot.attacher(this.ball)
  }
}