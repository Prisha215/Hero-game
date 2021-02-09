var hero,heroImage;
var alien,alienImage;
var people,peopleImage;

function preload(){
   heroImage=loadImage("Hero.jpeg");
  alienImage=loadImage("Alien.png");
  peopleImage=loadImage("People.jpg");
   
 }
function setup() {
  createCanvas(400, 400);

  hero=createSprite(20,50,100,200);
  hero.addImage(heroImage);
  hero.scale=0.4;

  alien=createSprite(230,80,110,210);
  alien.addImage(alienImage);
  alien.scale=0.4;

  people=createSprite(100,170,100,70);
  people.addImage(peopleImage);
  people.scale=0.1;
  
}
 
function draw() {
  background(220);
  if (keyDown(RIGHT_ARROW)){
  hero.VelocityX=-2;
  }
 drawSprites();
  
  
}