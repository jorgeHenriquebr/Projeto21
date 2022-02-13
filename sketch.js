//ainda está com alguns bugs que não consegui resolver


//variaveis
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

//motor de fisica
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//configurações da bola
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world, ball);

	//adicionando o chão e a cesta part 1
	ground =new Ground(width/2,460,width,10);
	leftSide =new Ground(650,410,10,90);
	rightSide =new Ground(850,410,10,90);


ellipseMode(RADIUS);
rectMode(CENTER);


	Engine.run(engine);
  
}


function draw() {
  	background(0);

//adicionando o chão e a cesta part 1
ground.display();
leftSide.display();
rightSide.display();
	
//atualizando o motor de fisica
Engine.update(engine);

//definindo a posição, espeçura da bola
  ellipse(ball.position.x,ball.position.y,20);

  //chamando a função da aplicação de força na bola
  keyPressed();

  drawSprites();
 
}


//função para o aplicamento de força na bola
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x: 0,y:0},{x: 1, y:-2})


	}


}

