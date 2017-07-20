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
  o.collide = function(b){
    // if( o.y < ball.y && ball.x < o.x  && ball.x < o.x + o.image.height)
    //   return 1
    // if(ball.y + ball.image.height > o.y){
    //   if(ball.x > o.x && ball.x < o.x + o.image.width){
    //     //log("collide")
    //     return true
    //   }
    // }
    if( o.alive && (rectInterSects(o, b)||rectInterSects(b, o))){
      return true
    }
    return false
  }
  return o
}
