
          class Stone{
            constructor(x, y,r) {
                var options = {
                    isStatic:true,
                    restitution:0,
                    friction:1,
                    density:1.2
                }
                this.body = Matter.Bodies.circle(x,y,r,options);
                
                
                this.image = loadImage("sprites/Plucking mangoes/stone.png");
                
                World.add(world, this.body);
              }

              
              display(){
                var angle = this.body.angle;
                push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                imageMode(CENTER);
                image(this.image,0,0,50,60);
                pop();
              }
        }