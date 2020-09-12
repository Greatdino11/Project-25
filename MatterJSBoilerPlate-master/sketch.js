
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground1, basket1, basket2, basket3;

function preload()
{

}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new paperBall(200,200);
	ground1 = new Ground(600, height-10, 1200, 20);
	basket1 = new basketBottom(600,380,100,10);
	basket2 = new basket(545,330,10,110);
	basket3 = new basket(655,330,10,110);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30});
	}
}

function draw() {
  background(200);

  Engine.update(engine);
  
  paper.display();

  ground1.display();

  basket1.display();

  basket2.display();

  basket3.display();

  drawSprites();
 
}



