
const canv = document.getElementById('canvas');
const canvas = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;


var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  canvas.clearRect(0,0, innerWidth, innerHeight);

  canvas.beginPath();
  canvas.arc(x, y, radius, 0, Math.PI * 2, false);
  canvas.strokeStyle = 'blue';
  canvas.stroke();

  if (x + radius > innerWidth || x - radius < 0 ) {
    dx = -dx;
  }

  if ( y + radius > innerHeight || y - radius < 0 ) {
    dy = -dy;
  }
  x += dx
  y += dy
}

animate();