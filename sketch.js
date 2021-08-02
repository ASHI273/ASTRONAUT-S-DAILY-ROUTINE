var bg
var sleep, brush, eat, gym;
var astrounaut
function preload() {
  bg = loadImage("images/space.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  eat = loadAnimation("images/eat.png");
  gym = loadAnimation("images/gym.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  createCanvas(1200,600)
  background(bg);  
  astrounaut = createSprite(300,230);
  astrounaut.addAnimation("sleeping",sleep);
  if(keyDown("Up_Arrow")){
    astrounaut.addAnimation("brushing",brush);
    astrounaut.changeAnimation("brushing");
    astronout.y = 350;
    astronout.x = 0;
    astronout.y = 0;


  }


  drawSprites();
}