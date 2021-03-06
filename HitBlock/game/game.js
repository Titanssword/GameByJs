class Game {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback

        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector("#id-canvas")
        this.context = this.canvas.getContext('2d')
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = false
        })
        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }
    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    //zhuce
    registerAction(key, callback){
        this.actions[key] = callback
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        // 开始运行程序
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }
    runloop() {
        var g = this
        var actions = Object.keys(g.actions)
        for( var i = 0; i < actions.length; i++){
          var key  = actions[i]
          if(g.keydowns[key]){
            g.actions[key]()
          }
        }
        g.update()
        this.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
        setTimeout(function(){
          g.runloop()
        },1000/window.fps)
    }

    init() {
        var g = this
        var loads = []
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
          let name = names[i]
          var path = g.images[name]
          let img = new Image()
          img.src = path
          img.onload = function(){
            //所有图片成功载入，调用run
            g.images[name] = img
             loads.push(1)
             log('load images')
             if(loads.length == names.length){
               g.__start()
             }
          }
        }
    }
    imageByName(name) {
      var g = this
      log('g.images', g.images)
      var img = g.images[name]
      var image = {
        w: img.width,
        h: img.height,
        image: img,
      }
      return image
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }
}

/*
var Game = function(fps, images, runCallback){

  // 预先载入图片
  var g = {
      scene: null,
    actions: {

    },
    keydowns: {

    },
    images:{

    },
  }
  var canvas = document.querySelector("#id-canvas")
  var context = canvas.getContext('2d')
  g.canvas = canvas
  g.context = context
  //var paddle = Paddle()
  //events

  window.addEventListener('keydown',function(event){
    //log('keydown')
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup',function(event){
    g.keydowns[event.key] = false
  })
  g.update = function() {
      g.scene.update()
  }
  g.draw = function() {
      g.scene.draw()
  }
  //zhuce
  g.registerAction = function(key, callback){
      g.actions[key] = callback
  }

  g.drawImage = function(paddle){
      g.context.drawImage(paddle.image, paddle.x, paddle.y)
  }
  //timer
  window.fps = 30
  var runloop = function(){
    //log(window.fps)
    var actions = Object.keys(g.actions)
    for( var i = 0; i < actions.length; i++){
      var key  = actions[i]
      if(g.keydowns[key]){
        g.actions[key]()
      }
    }
    g.update()
    context.clearRect(0, 0, canvas.width, canvas.height)
    g.draw()
    setTimeout(function(){
      runloop()
    },1000/window.fps)

  }

  var loads = []
  var names = Object.keys(images)
  for (var i = 0; i < names.length; i++) {
    let name = names[i]
    var path = images[name]
    let img = new Image()
    img.src = path
    img.onload = function(){
      //所有图片成功载入，调用run
      g.images[name] = img
       loads.push(1)
       log('load images')
       if(loads.length == names.length){
         g.__start()
       }
    }
  }

  g.imageByName = function(name){
    log('g.images', g.images)
    var img = g.images[name]
    var image = {
      w: img.width,
      h: img.height,
      image: img,
    }
    return image
  }
  g.run = function(){
    callbackrun(g)
    //这是程序开始处，在此预先载入所有图片
    log('game start')
    setTimeout(function(){
      runloop()
    },1000/window.fps)
  }

  g.runWithScene = function(scene) {
      g.scene = scene
      setTimeout(function(){
          runloop()
      },1000/fps)
  }
  g.replaceScene = function(scene) {
      g.scene = scene
  }
  g.__start = function(scene) {
      runCallback(g)
  }
  return g
}
*/
