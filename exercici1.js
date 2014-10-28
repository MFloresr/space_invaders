'use strict';

(function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var img = new Image();
  img.src = 'http://darkorbit-22.level3.bpcdn.net/do_img/global/pilotSheet/externalPPP/icons/ship_designs_190x210/ship_goliath_design_diminisher_top.png';
  var canvasx = 900;
  var canvasy = 600;
  var navesenemigas = [];
  var nave = {
    balas: [],
    image: img,
    velocity: 10,
    move : 'stop',
    position: {
      x: 350,
      y: 500,
    },
    size:{
      x:100,
      y:100,
    },
    shoot:function(){
      nave.balas.push(new Bala(nave.position.x,nave.position.y));
    }
  };

  function Bala(x,y) {
    this.img = new Image();
    this.img.src ='http://www.aeromodelismovirtual.com/images/statusicon/user_online.png';
    this.x = x+41;
    this.y = y-19;
    this.move = function () {
        this.y -= 5;
    }

  }

  function navenemiga(x, y) {
      this.img = new Image();
      this.img.src ='http://www.mtryx.net/GalaxyWars/images/scarab.png';
      this.x = 0;
      this.y = 0;
      this.move = function () {
          this.x += 5;
      };
      this.size = {
          x : 50,
          y : 50
      }

  }
 
    function crearnave() {
        navesenemigas.push(new navenemiga()) //aqui te quedaste creando naves enemigas
    }
    
  function canvasApp() {
    return true //Modernizr.canvas;
  }
  
  function film() {
    setInterval(draw,2000/60); // 60 fps (frames per second)
  }
  
  function draw() {
    if (canvasApp()){
      context.clearRect(0,0,canvas.width,canvas.height);
      context.drawImage(nave.image,nave.position.x,nave.position.y,nave.size.x,nave.size.y)


      nave.balas.forEach(function(e){
          context.drawImage(e.img,e.x,e.y)//aqui falta codigos
          e.move();
      })

    }

  }

  function presskey(e){
    console.log(nave.position.x);
      if (e.keyCode == 37){  //left
          if (nave.position.x > 0) {
              nave.position.x -= nave.velocity; 
          };
      }if (e.keyCode == 39){  //rigth
          if (nave.position.x < canvasx-nave.size.x){
              nave.position.x += nave.velocity;
          }
      } if (e.keyCode == 32) {  //enter 
        nave.shoot();
      }  
  } 
  
  window.addEventListener("keydown", presskey, false);



  film();

})()