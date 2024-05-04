var box ;
function setup() {
  createCanvas(800,600);
  box = createSprite(200,200,30,30)
}

function draw() 
{
  background("red");
  if (keyDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5
  }
  if (keyDown(LEFT_ARROW)){
    box.position.x = box.position.x - 5
  }

 drawSprites()
}




