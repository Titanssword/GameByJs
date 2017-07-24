var Block = function(game, position){
  //position shi [0,0]
  var p = position
  //log(p)
  //var image = imageFromPath('block.png')
  var o = game.imageByName('block')
  o.x = p[0]
  o.y = p[1]
  o.w = 50
  o.h = 20
  o.alive = true
  o.lifes = p[2] || 1
  // var o = {
  //   image: image,
  //   x: p[0],
  //   y: p[1],
  //   w: 50,
  //   h: 20,
  //   alive: true,
  //   lifes: p[2] || 1,
  // }
  o.kill = function(){
    o.lifes--
    if(o.lifes < 1){
        o.alive = false
    }
  }
  var aInb = function(x, x1, x2){
    return x >= x1 && x <= x2
  }
  // o.collide = function(b){
  //   // if( o.y < ball.y && ball.x < o.x  && ball.x < o.x + o.image.height)
  //   //   return 1
  //   // if(ball.y + ball.image.height > o.y){
  //   //   if(ball.x > o.x && ball.x < o.x + o.image.width){
  //   //     //log("collide")
  //   //     return true
  //   //   }
  //   // }
  //   if( o.alive && (rectInterSects(o, b)||rectInterSects(b, o))){
  //     return true
  //   }
  //   return false
  // }

  o.collide = function(ball){
    var x_mid_ball = ball.x + ball.w/2
    var y_mid_ball = ball.y + ball.h/2
    var x_mid_o = o.x + o.w/2
    var y_mid_o = o.y + o.h/2
    if(Math.abs(x_mid_ball - x_mid_o) <= (o.w/2 + ball.w/2)){
      if(Math.abs(y_mid_o - y_mid_ball) <= (ball.h/2 + o.h/2)){
          if(o.lifes){
            log("x_mid_ball",x_mid_ball)
            log("x_mid_o",x_mid_o)
            log("ball.w/2",ball.w/2)
            log("o.w/2",o.w/2)
            return true
          }
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
    // return false
    // var a = o
    // var b = ball
    // if(aInb(a.x, b.x, b.x + b.w) || (b.x, a.x, a.x + a.w) ){
    //   if(aInb(a.y, b.y, b.y + b.h) || (b.y, a.y, a.y + a.w) ){
    //     return true
    //   }
    // }
    // return false
  }
  return o
}
