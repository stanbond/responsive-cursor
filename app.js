
const canv = document.getElementById('canvas');
const canvas = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

function Ball(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    canvas.strokeStyle = 'blue';
    canvas.stroke();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx
    this.y += this.dy

    this.draw();
  }
}

// var ball = new Ball(200, 200, 3, 3, 30)
var ballArray = [];

for (var i = 0; i < 100; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 10;
  var dy = (Math.random() - 0.5) * 10;
  ballArray.push(new Ball(x,y,dx,dy,radius))
}
function animate() {
  requestAnimationFrame(animate);
  canvas.clearRect(0,0, innerWidth, innerHeight);
  
  // ball.update();

  for (var i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
  }
}

animate();