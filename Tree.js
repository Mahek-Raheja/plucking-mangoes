class Tree{
    constructor(x, y) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, options);
        
        this.image = loadImage("sprites/Plucking mangoes/tree.png");
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);

        
        image(this.image,0,0,500,600);
        
        
        
        pop();
      }
}