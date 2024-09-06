let cols, rows;
let scl = 20;

function setup() {
  createCanvas(400, 400, WEBGL);

  cols = width / scl;
  rows = height / scl;
}

function draw() {
  background(0);

  translate(-width / 2, -height / 2);

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      stroke(255);
      noFill();
      rect(x * scl, y * scl, scl, scl);
    }
  }
}
