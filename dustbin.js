class Dust {
    constructor(x,y,height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      this.image=loadImage("sprites/dust.png");
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  