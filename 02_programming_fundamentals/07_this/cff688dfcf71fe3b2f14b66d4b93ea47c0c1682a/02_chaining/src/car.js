const car = {
  // Complete here
  start : function (){
    this.speed= 0;
    this.minutes= 0;
    this.distance = 0;
    return this;
  },
  changeSpeed : function (speed = 130) {
    this.speed = speed ;
    return this;
  },
  drive : function (minutes = 45) {
    this.minutes = minutes ;
    this.distance = this.distance + this.speed * this.minutes / 60 ;
    return this; 
  }, 
  showDistance : function () {
    console.log(this.distance + " Km");
    return this;
  },
};

module.exports = car;
