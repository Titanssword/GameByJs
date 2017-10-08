var Paddle = function(game){
  //var image = imageFromPath('paddle.jpg')
  log(game)
  var o = game.imageByName('paddle')
  // var o = {
  //   image: image,
  //   x: 100,
  //   y: 200,
  //   speed: 5,
  // }
  o.x = 100
  o.y = 250
  o.speed = 15
  o.setPosition = function(x){
    if(x < 0){
      x = 0
    }
    if( x > 400 - o.w){
      x = 400 - o.w
    }
    o.x = x
  }
  o.moveLeft = function() {
    o.setPosition(o.x - o.speed)
  }
  o.moveRight = function(){
    o.setPosition(o.x + o.speed)
  }
  var aInb = function(x, x1, x2){
    return x >= x1 && x <= x2
  }
  o.collide = function(ball){
    var x_mid_ball = ball.x + ball.w/2
    var y_mid_ball = ball.y + ball.h/2
    var x_mid_o = o.x + o.w/2
    var y_mid_o = o.y + o.h/2
    //矩形相撞算法，中心点 , x之间的绝对值差 小于 各个矩形的长加在一起的的1/2 y之间的绝对值差小于 各个矩形的宽加在一起的 1/2
    if(Math.abs(x_mid_ball - x_mid_o) <= (o.w/2 + ball.w/2)){
      if(Math.abs(y_mid_o - y_mid_ball) <= (ball.h/2 + o.h/2)){
        // log("x_mid_ball",x_mid_ball)
        // log("x_mid_o",x_mid_o)
        // log("ball.w/2",ball.w/2)
        // log("o.w/2",o.w/2)
        return true
      }
    }
    else{
      return false
    }
    // if( o.y < ball.y && ball.x < o.x  && ball.x < o.x + o.h)
    //   return true
    // if(ball.y + ball.h > o.y){
    //   if(ball.x > o.x && ball.x < o.x + o.w){
    //     //log("collide")
    //     return true
    //   }
    // }


    // var a = o
    // var b = ball
    // if(aInb(a.x, b.x, b.x + b.w) || (b.x, a.x, a.x + a.w) ){
    //   if(aInb(a.y, b.y, b.y + b.h) || (b.y, a.y, a.y + a.h) ){
    //     return true
    //   }
    // }
    // return false
  }
  return o
}
