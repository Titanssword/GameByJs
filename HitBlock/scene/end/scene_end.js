var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    s.draw = function() {
        game.context.fillText('game over press r to reset the game', 100, 200)

    }
    game.registerAction('r',function(){
        var s = new GSceneTitle(game)
        game.replaceScene(s)
    })
    s.update = function(){

    }
    return s
}
