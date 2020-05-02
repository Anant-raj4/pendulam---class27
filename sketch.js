const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var con1;
var ground;
var platform1,platform2,sepLog,platform3;
var bird;
var circle;
var ground2,ground4,gruond4;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,100,400,10);
   
    
    bird = new Bird(200,215,10,10);
    con1 = new Slingshot(bird.body,{x:200,y:100})
  }
   function draw(){
    Engine.update(engine);
    background("black");
      ground.display();
      bird.display();
      con1.display();
   

}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}



