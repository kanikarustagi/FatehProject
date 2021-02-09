class Ground{
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibilty=255;

    World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;  
    rectMode(CENTER);
    fill(rgb(32,10,36));
    rect(pos.x, pos.y, this.width, this.height);
  }

  displayLevel2(){
   
    push();
    var pos =this.body.position;
    pos.x=350
    pos.y=350
    strokeWeight(0);   
    rectMode(CENTER);
    fill(rgb(225, 46, 14));
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};