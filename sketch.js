let x;
let y;
let maxSpeed = 15;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
} 

function draw() { 
  x += map(rotationY, -180, 180, -maxSpeed, maxSpeed);
  y += map(rotationX, -180, 180, -maxSpeed, maxSpeed);
  
  background(220);
  ellipse(x, y, 50, 50);
}

/* resizes the canvas if the phone gets flipped so that
 * the browser orientation changes from landscape to
 * portrait or vice-versa. a must-have for games with tilt or
 * rotation controls!
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}