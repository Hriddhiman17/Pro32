class Block extends BaseClass{
  constructor(x, y) {
    super(x, y, 40, 70);
    //this.Visibility = 255;
  }
  score(){
    if(this.Visiblity < 0 && this.Visiblity >= -5){
      score++;
    }
 }
  display(){
    if(this.body.speed < 3){
    super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      pop();
    }
  }
};