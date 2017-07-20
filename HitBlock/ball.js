var Ball = function(game){
  //var image = imageFromPath('ball.jpg')
  var o = game.imageByName('ball')
  o.x = 100
  o.y = 200
  o.speedX = 5
  o.speedY = 5
  o.fired = false
  // var o = {
  //   image: image,
  //   x: 100,
  //   y: 200,
  //   speedX: 5,
  //   speedY: 5,
  //   fired: false,
  // }
  o.fire = function(){
      //log('fire')
      o.fired = true
  }
  o.move = function(){
    //log('move ')
    if(o.fired){
      //log("move")
      if(o.x < 0 || o.x > 400){
        o.speedX *= -1
      }
      if(o.y < 0 || o.y > 300){
        o.speedY *= -1
      }
      o.x += o.speedX
      o.y += o.speedY
    }
    //log(o.x, o.y)
    //log("move")
  }
  o.retan = function(){
    o.speedY *= -1
  }
  return o
}
