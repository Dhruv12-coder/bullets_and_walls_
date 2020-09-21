var bullet,wall; 
var speed,weight,thickness;

function setup() {
  createCanvas(2000,800);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random (30,52);
  thickness=random(22,83)

  bullet= createSprite(50,210,100,50);
  bullet.shapeColor=color (255,255,255);
  wall=createSprite(1500,200,thickness,height/2);

  
  
  bullet.velocityX=speed;
  
}

function draw() {
  background(0,0,0);

  wall.shapeColor= color (255,255,255);
   
  if(hasCollided(bullet,wall)) {
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (damage>10){
        wall.shapeColor=color(255,0,0);
      }

      if (damage<10){
        wall.shapeColor= color(0,255,0);
      }
  
     
     
  drawSprites();
}

function hasCollided(object1,object2){
  
  bulletRightEdge=object1.x+object1.width;
  wallLeftEdge=object2.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else {
    return false;
  }
}
}
