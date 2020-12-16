var wall, car;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500))
  wall = createSprite(1500,200,60,height/2);
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);

  text("Speed ="+ speed,1400,20);
  text("Weight ="+ weight,1400,40);
  
  if(car.collide(wall)) {
    
    var deformation = (0.5 * weight * speed * speed)/22500;
    if(deformation > 180) {
      car.shapeColor = "red";
    }
    else if(deformation < 180 && deformation > 100) {
      car.shapeColor = "yellow";
    }
    else {
      car.shapeColor = "green";
    }

  }

  drawSprites();
}