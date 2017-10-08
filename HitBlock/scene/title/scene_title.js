var SceneTitle = function(game) {
    var s = {
        game: game,
    }
    s.draw = function() {
        game.context.fillText('press k to start game ', 100, 200)

    }

    s.update = function(){

    }
    return s
}
