
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeobj;
var Groundobj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stoneobj;
var boy;
var launcher;
var launchingForce=100;

function preload()
{
boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 600);
   engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stoneobj=new stone(235,425,50)

	mango1=new mango(1100,100,50)
	mango2=new mango(1170,130,50)
	mango3=new mango(1050,120,30)
	mango4=new mango(1000,60,40)
	mango5=new mango(1200,50,70)
	mango6=new mango(900,230,50)
	mango7=new mango(1500,250,80)
	mango8=new mango(950,70,40)
	mango9=new mango(1450,30,60)
	mango10=new mango(950,50,50)
	
    treeobj=new tree(1050,570)

	groundobj=new ground(width/2,600,width,20)

	launcher=new Launcher(stoneobj.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
	background(230);
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);
		
  
	treeobj.display();
	stoneobj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango6.display();
    mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	
	stoneObj.display();
  
	groundobj.display();
	launcherobj.display();
	detectollision(stoneobj,mango1);
	detectollision(stoneobj,mango2);
	detectollision(stoneobj,mango3);
	detectollision(stoneobj,mango4);
	detectollision(stoneobj,mango5);
	detectollision(stoneobj,mango6);
	detectollision(stoneobj,mango7);
	detectollision(stoneobj,mango8);
	detectollision(stoneobj,mango9);
	detectollision(stoneobj,mango10);

}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(stone,mango){

  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=mango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(mango.body,false);
    }

  }



