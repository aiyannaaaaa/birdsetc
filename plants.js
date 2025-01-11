let imgs = [];
let zoomFactor = 5;

function preload() {
  imgs.push(loadImage('assets/Achillea millefolium ‘Paprika’ (Paprika Yarrow).jpg'));
  imgs.push(loadImage('assets/Achillea millefolium (Common Yarrow).jpg'));
  imgs.push(loadImage('assets/Calliandra californica (Baja Fairy Duster).jpg'));
  imgs.push(loadImage('assets/Condea emoryi (Desert Lavender).jpg'));
  imgs.push(loadImage('assets/Dudleya brittonii (Giant Chalk Dudleya).jpg'));
  imgs.push(loadImage('assets/Erigeron glaucus (Seaside Daisy).jpg'));
  imgs.push(loadImage('assets/Eriogonum grande var. rubescens (Red-flowered Buckwheat).jpg'));
  imgs.push(loadImage('assets/Heteromeles arbutifolia ‘Davis Gold’ (Golden Berry Toyon).jpg'));
  imgs.push(loadImage('assets/Heteromeles arbutifolia (Toyon).jpg'));
  imgs.push(loadImage('assets/Simmondsia chinensis (Jojoba).jpg'));
  imgs.push(loadImage('assets/Sphaeralcea ambigua (Desert Globemallow).jpg'));
  imgs.push(loadImage('assets/vitisrodgersredgrape.jpg'));
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