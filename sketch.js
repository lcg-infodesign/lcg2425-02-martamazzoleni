function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("white");
  stroke("0")
  strokeWeight(1);
  noFill

  let col = 12; 
  let row = 6; 
  let boccioliSize = min(width / (col + 1), height / (row + 1)); 
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      push();
      translate((i + 1) *  boccioliSize, (j + 1) *  boccioliSize);
      drawBoccioli( boccioliSize * 0.3); 
      pop();
    }
  }
}

function drawBoccioli(size) {
  let numEllipses = int(random(7, 12)); 
  let angleStep = TWO_PI / numEllipses;

  for (let i = 0; i < numEllipses; i++) {
    let angle = i * angleStep;
    
    let ellipseWidth = random(size * 0.6, size); 
    let ellipseHeight = random(size * 0.3, size * 0.8); 
    

    push();
    rotate(angle);
    translate(0, size / 4); 
    ellipse(0, 0, ellipseWidth, ellipseHeight); 
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
