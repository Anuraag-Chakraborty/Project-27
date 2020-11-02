class Bob {
    constructor(x, y, diameter){
    
     var options = {
        isStatic : false,
        'restitution' : 0.8,
        'friction' : 4,
        'density' : 1.2,
    } 
   
   this.body = Bodies.circle(x,y,diameter,options);
   this.width = width;
   this.height = height;
   this.diameter = diameter;
   this.image = loadImage("paper.png");

   World.add(world, this.body);
   }
  display(){
   var pos =this.body.position;   
   fill("white");
   ellipseMode(RADIUS);
   ellipse(pos.x,pos.y,this.diameter);  
   imageMode(CENTER)
   image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
  } 
}