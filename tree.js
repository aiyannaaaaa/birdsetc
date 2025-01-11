let imgs = [];
let zoomFactor = 5;

function preload() {
  imgs.push(loadImage('assets/Acer-negundo-1-300x300.jpg'));
  imgs.push(loadImage('assets/coast live oak.jpg'));
  imgs.push(loadImage('assets/desert_olive.jpg'));
  imgs.push(loadImage('assets/knobcone pine.jpg'));
  imgs.push(loadImage('assets/N. California black walnut.jpg'));
  imgs.push(loadImage('assets/white_alder.jpg'));
  imgs.push(loadImage('assets/coast redwood.jpg'));
  imgs.push(loadImage('assets/valley oak.jpg'));
  imgs.push(loadImage('assets/burningbush.jpg'));
}

let sphereRotationX = 0;
let sphereRotationY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  stroke(255); 
  strokeWeight(1);
  noFill(); 
  describe(
    'Users can move the mouse to adjust the perspective of a sphere containing multiple images. Scroll to zoom in and out.'
  );
}

function draw() {
  background(26, 26, 26);

  sphereRotationX = map(mouseY, 0, height, -180, 180);
  sphereRotationY = map(mouseX, 0, width, -180, 180);

  rotateX(sphereRotationX);
  rotateY(sphereRotationY);

  camera(0, 0, zoomFactor * 1000);  

  let imageIndex = 0; 

  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      rotateZ(zAngle);
      rotateX(xAngle);

      translate(0, 400, 0);

      texture(imgs[imageIndex % 9]); 

      box(50);

      pop();
      imageIndex++;
    }
  }
}

function mouseWheel(event) {
  zoomFactor += event.delta * 0.05;
  zoomFactor = constrain(zoomFactor, 0.1, 5); 
  return false; 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}

document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('background-audio');
  audio.volume = 0.5; 
  audio.play(); 
});
