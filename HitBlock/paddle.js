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
    if( x > 400 - o.image.width){
      x = 400 - o.image.width
    }
    o.x = x
  }
  o.moveLeft = function() {
    o.setPosition(o.x - o.speed)
  }
  o.moveRight = function(){
    o.setPosition(o.x + o.speed)
  }
  o.collide = function(ball){
    // if( o.y < ball.y && ball.x < o.x  && ball.x < o.x + o.image.height)
    //   return 1
    if(ball.y + ball.image.height > o.y){
      if(ball.x > o.x && ball.x < o.x + o.image.width){
        //log("collide")
        return true
      }
    }
    return false
  }
  return o
}
