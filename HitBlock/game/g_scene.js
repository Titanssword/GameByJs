class GScene {
    constructor(game) {
        this.game = game

    }
    draw() {

    }
    update() {

    }
}

class GSceneTitle extends GScene{
    constructor(game) {
        super(game)
        game.registerAction('k',function(){
            var s = Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        this.game.context.fillText('press k to start game ', 100, 200)
    }
    update() {

    }
}
class GSceneEnd extends GScene{
    constructor(game) {
        super(game)
        game.registerAction('r',function(){
            var s = new GSceneTitle(game)
            game.replaceScene(s)
        })
    }
    draw() {
        thisgame.context.fillText('game over press r to reset the game', 100, 200)
    }
    update() {

    }
}
