var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(fixedRect.x -movingRect.x);
  console.log(fixedRect.width/2+movingRect.width/2);
  console.log(fixedRect.y -movingRect.y);
  console.log(fixedRect.height/2+movingRect.height/2);
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
}