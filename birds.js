let imgs = [];
let zoomFactor = 5;

function preload() {
  imgs.push(loadImage('assets/allens_hummingbird.jpg'));
  imgs.push(loadImage('assets/black-necked-stilt.jpg'));
  imgs.push(loadImage('assets/black_oystercatcher.jpg'));
  imgs.push(loadImage('assets/brown_pelican.jpg'));
  imgs.push(loadImage('assets/burrowing_owl.jpg'));
  imgs.push(loadImage('assets/golden_eagle.jpg'));
  imgs.push(loadImage('assets/greater_sage_grouse.jpg'));
  imgs.push(loadImage('assets/loggerhead_shrike.jpg'));
  imgs.push(loadImage('assets/long_billed_curlew.jpg'));
  imgs.push(loadImage('assets/surf_scoter.jpg'));
  imgs.push(loadImage('assets/sandhill_crane.jpg'));
  imgs.push(loadImage('assets/wesyern_grebe.jpg'));
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

      texture(imgs[imageIndex % 12]); 

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