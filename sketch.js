var bg,sleep,brush,gym,eat,drink,move;
var Astro

function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadImage('images/sleep.png')
  brush=loadImage("images/brush.png");
  gym=loadAnimation('images/gym1.png,',"images/gym2.png");
  eat=loadAnimation('images/eat1.png','images/eat2.png')
   drink=loadAnimation("images/drink1.png","images/drink2.png");
   move=loadAnimation('images/move.png','images/move1.png')
}
function setup() {
  createCanvas(1000,800);
 Astro= createSprite(300, 230, 50, 50);
 Astro.addAnimation("sleeping",sleep);
 Astro.scale=0.1

}

function draw() {
  background(bg);  
  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  if(keyDown("up")){
    Astro.addAnimation("brushing", brush);
    Astro.changeAnimation("brushing");
    Astro.y = 350;
    Astro.velocityX = 0;
    Astro.velocityY = 0;
  }

  if(keyDown("down")){
    Astro.addAnimation("gyming", gym);
    Astro.changeAnimation("gyming");
    Astro.y = 350;
    Astro.velocityX = 0;
    Astro.velocityY = 0;
  }

  if(keyDown("left")){
    Astro.addAnimation("eating", eat);
    Astro.changeAnimation("eating");
    Astro.x = 150;
    Astro.y=350
    Astro.velocityX = 0;
    Astro.velocityY = 0;
  }
  
  if(keyDown("right")){
    Astro.addAnimation("moving", move);
    Astro.changeAnimation("moving");
    Astro.x = 300;
   // Astro.y=350
    Astro.velocityX = 1;
    Astro.velocityY =1;
  }

  
  drawSprites();
}


