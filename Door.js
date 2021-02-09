class Door{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // if(gameState=="level2"){
    //    pos.x=2000
     //   pos.y=2000
     //   }
      
      rectMode(CENTER);
      fill(rgb(224, 149, 247));
      rect(pos.x, pos.y, this.width, this.height);
    }
  }