class Mango{
  constructor(x, y) {
      var options = {
          isStatic:true,
        'restitution':0,
          'friction':1
          
      }
      this.body = Matter.Bodies.circle(x, y,2, options);
      
      this.image = loadImage("sprites/Plucking mangoes/mango.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 30, 40);
      pop();
    }
}