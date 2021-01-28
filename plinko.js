class plinko {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:0.1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){ 
     var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("black");
    ellipse (0,0,this.radius*2,this.radius*2)    
    pop()
    }
}

  