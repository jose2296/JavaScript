var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var ANCHO = canvas.width
var ALTO = canvas.height

var numpuntos= 350

var distanciaentrepuntos = 70

var anchopunto = 1
var altopunto = 1

var array = []

var dirx = 1
var diry = 1

class punto {
  constructor(x,y,vx,vy) {
    this.x=x
    this.y=y
    this.vx= Math.random() < 0.5 ? -1 : 1
    this.vy= Math.random() < 0.5 ? -1 : 1
  }
  dibujar(){
    ctx.fillStyle = "#14ff00"
    ctx.fillRect(this.x,this.y, anchopunto,altopunto)
  }

  mover(){
    this.x += 0.5 * this.vx
    this.y += 0.5 * this.vy
  }


}

for (var i = 0; i < numpuntos; i++) {
  array.push(new punto(Math.round(Math.random()*ANCHO), Math.round(Math.random()*ALTO)))
}


function dibujarPuntos() {
  for (var i = 0; i < array.length; i++) {
    array[i].dibujar()
  }
}

function repintarCanvas() {
  ctx.fillStyle = "#000000"
  ctx.fillRect(0,0,ANCHO,ALTO)
}

function moverPuntos(randx,randy) {
  for (var i = 0; i < array.length; i++) {
    array[i].mover()
  }
}


function colisionPared() {
  for (var i = 0; i < array.length; i++) {
    if (array[i].x > ANCHO-anchopunto || array[i].x < 0 ) {
      array[i].vx *= -1

    }
    if (array[i].y > ALTO-altopunto || array[i].y < 0 ) {
        array[i].vy *= -1
    }
  }

}




function compdispuntos() {

  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {

      var dist = Math.sqrt(Math.pow(array[j].x - array[i].x, 2) + Math.pow(array[j].y - array[i].y, 2))
      // console.log(dist);

      if (dist < distanciaentrepuntos) {
        ctx.strokeStyle = "#1cff00"
        ctx.beginPath();
        ctx.moveTo(array[i].x,array[i].y);
        ctx.lineTo(array[j].x,array[j].y);
        ctx.stroke();
      }
    }
  }

}



function main() {

  requestAnimationFrame(main)

  repintarCanvas()

  dibujarPuntos()

  moverPuntos()

  colisionPared()

  compdispuntos()


  canvas.addEventListener("mousemove", event =>{

  })

}


main()
//setInterval(main, 1000)
