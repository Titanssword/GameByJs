var __main = function(){
  var images = {
    ball: 'img/ball.jpg',
    block: 'img/block.png',
    paddle: 'img/paddle.jpg',
  }
  var leftDown = false
  var rightDown = false
  //var game = Game(30, images)

  var game = Game(30, images, function(g){
      var s = Scene(game)
      g.runWithScene(s)
  })

  enableDebugModel(game, true)
}

__main()
