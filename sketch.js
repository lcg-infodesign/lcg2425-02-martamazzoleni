function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("white");
  strokeWeight(1);
  noFill

  let col = 12; //num. colonne
  let row = 6; //num. righe 
  let boccioliSize = min(width / (col + 1), height / (row + 1)); //dim. glifi

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
  let numEllipses = int(random(7, 12)); //num random ellissi x glifo
  let angleStep = TWO_PI / numEllipses;

  //palette stroke
  let colorPalette = [
    color(255, 204, 0),   //giallo 
    color(255, 153, 51),  //arancio
    color(255, 102, 102), //salmone
    color(204, 51, 102),  //magenta
    color(153, 0, 51),    //rosso vino
    color(102, 0, 51)     //bordeaux 
  ];

  for (let i = 0; i < numEllipses; i++) {
    let angle = i * angleStep;
    
    //variabili larg. e alt. ellisse
    let ellipseWidth = random(size * 0.6, size); 
    let ellipseHeight = random(size * 0.3, size * 0.8); 

    //colore stroke dalla palette
    stroke(colorPalette[int(random(colorPalette.length))]);

    push();
    rotate(angle);
    translate(0, size / 4); //pos. ellissi per creare intersez.
    ellipse(0, 0, ellipseWidth, ellipseHeight);
    pop();
  }
}

//dim. display
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
