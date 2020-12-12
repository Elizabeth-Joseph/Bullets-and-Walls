//declaring the variables
var bullet,wall,thickness;
var speed,weight;
var damage;


function setup() {
  //creating the canvas
  createCanvas(1600,400);

  //setting speed,weight and thickness to random values 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  //creating the bullet
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor="white";


  //creating the wall
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="color(80,80,80)";

  //making the bullet sprite move towards the wall
  bullet.velocityX=speed;

}

function draw() {
  //clearing the background
  background("black"); 

  //calling the hascollided function
  hascollided(bullet,wall);

  //adding the formula
 damage= 0.5 * weight* speed* speed  / (thickness*thickness*thickness);

 //assigning different colors to the bullet based on the collision

 if(damage>10){

  wall.shapeColor="red";
 
}


if(damage<10){

   wall.shapeColor="green";
 

 }

//displaying the sprites
drawSprites();

}



