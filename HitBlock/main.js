var __main = function(){
  var images = {
    ball: 'ball.jpg',
    block: 'block.png',
    paddle: 'paddle.jpg',
  }
  var leftDown = false
  var rightDown = false
  //var game = Game(30, images)

  var game = Game(30, images, function(g){
    var paddle = Paddle(game)
    // var blocks = []
    // for ( var i = 0; i < 5; i++){
    //   var b = Block()
    //   b.x = i * 100
    //   b.y = 50
    //   blocks.push(b)
    //
    // }
    var blocks = loadLevel(game,1)
    //var block = Block()
    //events
    /*
    window.addEventListener('keydown',function(event){
      log('keydown')
      var k = event.key
      if(k == 'ArrowLeft'){
          leftDown = true

          // x -= 10
          // context.clearRect(0, 0, canvas.width, canvas.height)
          // context.drawImage(img, x, y)
          // log(x)
      }
      else if(k == 'ArrowRight'){
          rightDown = true
          // x += 10
          // context.clearRect(0, 0, canvas.width, canvas.height)
          // context.drawImage(img, x, y)
      }

      //log(event)
    })
    window.addEventListener('keyup',function(event){
      log('keyUp')
      var k  = event.key
      if(k == 'ArrowLeft'){
        leftDown = false
      }
      else if(k == 'ArrowRight'){
        rightDown = false
      }
    })
    */
    var ball = Ball(game)

    //log(game.keydowns)
    game.registerAction('a',function(){
        paddle.moveLeft()
    })
    game.registerAction('d',function(){
        paddle.moveRight()
    })
    game.registerAction('f',function(){
        ball.fire()
        //ball.move()
        //log('ball move')
    })

    /*
    game.update = function(){
      if(leftDown){
        //if(paddle.x - paddle.speed > 0 && paddle.x - paddle.speed <200){
            paddle.moveLeft()
        //}
      }
      else if(rightDown){
        //if(paddle.x + paddle.speed > 0 && paddle.x + paddle.speed <200){
            paddle.moveRight()
      //  }
      }
    }
    */
    game.update = function(){
      if(paused){
        return
      }
      ball.move()
      //判断碰撞
      if(paddle.collide(ball)){
          ball.retan()
      }
      for(var i = 0; i < blocks.length; i++){
          var block = blocks[i]
          if(block.collide(ball)){
              log('球撞block')
              log(block)
              log(ball)
              block.kill()
              //更新分数
              score += 100
              ball.retan()
          }
      }
    }
    game.draw = function(){
      game.drawImage(paddle)
      game.drawImage(ball)
      for(var i = 0; i < blocks.length; i++){
          var block = blocks[i]
          if(block.alive){
            game.drawImage(block)
          }
      }

      //game.context.drawImage(paddle.image, paddle.x, paddle.y)

      //draw labels
      game.context.fillText('hello gamer your score is ' + score,10,50)
    }
  })
  enableDebugModel(game, true)
  // window.addEventListener('keydown', function(event){
  //     var key = event.key
  //     if(event.key == 'p'){
  //         paused = !paused
  //     }
  //     else if ('1234567'.includes(key)) {
  //         blocks = loadLevel(key)
  //     }
  //     // else if (event.key == '1') {
  //     //     blocks = loadLevel(1)
  //     // }
  //     // else if (event.key == '2') {
  //     //     blocks = loadLevel(2)
  //     // }
  // })
  // img.onload = function(){
  //   context.drawImage(img, x, y)
  // }

}

__main()
