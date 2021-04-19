
var fixedRect, movingRect;
var gameObject1, gameObject2;
var car, wall;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(400, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(150, 200, 50, 50);
  fixedRect.shapeColor = "green";



  car = createSprite(250, 650,100,45);
  car.shapeColor = "green";
  car.velocityX = 5;

  wall = createSprite(750,650, 200, 200);
  wall.shapeColor = "green";
  
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Touching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }


  if(Touching(car,wall)){
    car.shapeColor = "red";
    car.velocityX = 0;
  }
  
  else {
    car.velocityX = 5;
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function Touching(sprite,sprite2){
  if (sprite.x - sprite2.x < sprite2.width/2 + sprite.width/2
    && sprite2.x - sprite.x < sprite2.width/2 + sprite.width/2
    && sprite.y - sprite2.y < sprite2.height/2 + sprite.height/2
    && sprite2.y - sprite2.y < sprite2.height/2 + sprite.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}










