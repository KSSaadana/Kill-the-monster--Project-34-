const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var hero, rope, monster
var BackgroundImg

function preload(){
  BackgroundImg = loadImage("images/GamingBackground.png");
}


function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;
ground= new Ground(500,550,1050,20);
box1= new Box(800,70,50,50);
box2= new Box(800,70,50,50);
box3= new Box(800,70,50,50);
box4= new Box(800,70,50,50);
box5= new Box(800,70,50,50);
box6= new Box(800,70,50,50);
box7= new Box(700,70,50,50);
box8= new Box(700,70,50,50);
box9= new Box(700,70,50,50);
box10= new Box(700,70,50,50);
box11= new Box(700,70,50,50);
box12= new Box(700,70,50,50);
box13= new Box(600,70,50,50);
box14= new Box(600,70,50,50);
box15= new Box(600,70,50,50);
box16= new Box(600,70,50,50);
box17= new Box(600,70,50,50);
box18= new Box(600,70,50,50);
box19= new Box(600,70,50,50);
box20= new Box(600,70,50,50);
monster = new Monster(930,450,140,150);
hero= new Hero(400,200,320,120);

fly=new Fly(hero.body, {x:400, y:150});

}

function draw() {
  background(BackgroundImg);
  Engine.update(engine);
 ground.display();

 
   fill("purple");
   textSize(35)
   text("Drag and ", 70,50)

   fill("indigo");
   textSize(35)
   text("leave the", 220,50)

   fill("blue");
   textSize(35)
   text("hero to", 370,50)

   fill("green");
   textSize(35)
   text("kill the", 490,50)

   fill("yellow");
   textSize(35)
   text("monster!", 600,50)

   fill("orange");
   textSize(35)
   text("You can", 750,50)

   fill("red");
   textSize(35)
   text("do it!!!", 887,50)
 
console.log(monster.speed)
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
fly.display();
hero.display();
monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}