var Scene = function(game) {
    var s = {
        game:game,

    }
    var paddle = Paddle(game)
    var blocks = loadLevel(game,1)
    var ball = Ball(game)
    var score = 0

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


    s.draw = function() {
        // draw 背景
        game.context.fillStyle = "#554"
        game.context.fillRect(0, 0, 400, 300)
        game.drawImage(paddle)
        game.drawImage(ball)
        for(var i = 0; i < blocks.length; i++){
            var block = blocks[i]
            if(block.alive){
              game.drawImage(block)
            }
        }
        game.context.fillText('hello gamer your score is ' + score,10,50)
    }
    s.update = function(){
      if(paused){
        return
      }
      if (ball.y > paddle.y){
          var end = new SceneEnd(game)
          game.replaceScene(end)
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

    var enableDrag = false
    game.canvas.addEventListener('mousedown',function(event){
      log(event)
      var x = event.clientX
      var y = event.clientY
      if(ball.hasPoint(x, y)){
        enableDrag = true
      }
    })
    game.canvas.addEventListener('mousemove',function(event){
      var x = event.offsetX
      var y = event.offsetY
      //log(event)
      if(enableDrag){

        ball.x = x
        ball.y = y
        log(x, y)

      }

    })
    game.canvas.addEventListener('mouseup',function(event){
      //var x = event.offsetX
      log(event)
      enableDrag = false
    })

    return s
}
