class Player {
    constructor(x,y,width,height) {
      var options = {
        isStatic:false,
        'restitution':0.1,
        'friction':1,
        'density':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    
    //display(){
     // var pos =this.body.position;
     // rectMode(CENTER);
     // fill(rgb(128, 0, 34));
     // rect(pos.x, pos.y, this.width, this.height);
      
   // }

    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      fill(rgb(128, 0, 34));
      rect(pos.x, pos.y, this.width, this.height);     
    }

    displayLevel2(x, y){
      rectMode(CENTER);
      fill(rgb(128, 0, 34));
      rect(x, y, this.width, this.height);     
    }
  };