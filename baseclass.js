class BaseClass{
constructor(x,y,width,height){
var options={
 'restitution':0.8,
  'friction' : 1.0,
  'denisity': 1.0,
    }
    this.body= Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
}
display(){
    var angle=this.body.angle;
    Push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    ImageMode(center);
    Pop();
}

}
