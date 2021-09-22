const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4,bob5, rope,rope1,rope2,rope3,rope4


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    bobObject1 = new Bob (340,470,20)
	bobObject2 = new Bob (380,470,20)
	bobObject3 = new Bob (420,470,20)
	bobObject4 = new Bob (460,470,20)
	bobObject5 = new Bob (500,470,20);
	rope1= new Rope(bobObject1.body,roof.body,-40*2, 0);
	rope2= new Rope(bobObject2.body,roof.body,-20*2,0);
	rope3= new Rope(bobObject3.body,roof.body,-0*2,0);
	rope4= new Rope(bobObject4.body,roof.body,20*2,0);
	rope5= new Rope(bobObject5.body,roof.body,40*2,0);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  //create ellipse shape for multiple bobs here
 
  
	  var options={
		  'restitution':1.5,
		  'friction':1.0,
		  'density':1.0
	  }
	  this.x=x;
	  this.y=y;
	  this.r=r
	  this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
	  World.add(world, this.body);

  
 
		  var bobpos=this.body.position;		
		  push()
		  translate(bobpos.x, bobpos.y);
		  rectMode(CENTER)
		  //strokeWeight(4);
		  //stroke("black");
		  fill(rgb(6, 253, 199));
		  ellipse(0,0,this.r, this.r);
		  pop()
  


 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-45});
	}
}
