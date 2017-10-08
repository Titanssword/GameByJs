var log = console.log.bind(console)
// var e = sel => document.querySelector('#id-text-log')
// var log = function(s){
//   e('#id-text-log').value += '\n' + s
// }
var imageFromPath = function(path) {
  var img = new Image()
  img.src = path
  return img
}

var rectInterSects = function(a, b){
  var o = a
  if(b.y > o.y && b.y < o.y + o.image.height){
    if(b.x > o.x && b.x < o.x + o.image.width){
       return true
    }
  }
  return false
}

// var imageByName = function(){
//
// }
var paused = false
var loadLevel = function(game, n){

  n = n - 1
  var level = levels[n]
  log(level.length)
  for ( var i = 0; i < level.length; i++){
    var p = level[i]
    //log(p)
    var b = Block(game, p)
    blocks.push(b)

  }
  return blocks
}

var enableDebugModel = function(game, enable) {
    if(!enable){
      log('true')
       return
    }
    log('enableDebugModel')
    window.addEventListener('keydown', function(event){
        var key = event.key
        if(event.key == 'p'){
            paused = !paused
        }
        else if ('1234567'.includes(key)) {
            blocks.length = 0
            blocks = loadLevel(game, key)
            log(blocks)
        }

    })
    //控制速度
    document.querySelector('#id-input-speed').addEventListener('input',function(){
      var input = event.target
      log(event, input.value)
      window.fps = Number(input.value)
    })
}
var blocks = []
var score = 0
