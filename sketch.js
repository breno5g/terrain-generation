let cols, rows;
let scl = 20;

function setup() {
  createCanvas(400, 400, WEBGL);

  cols = width / scl;
  rows = height / scl;
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  rotateX(PI / 3);
  translate(-width / 2, -height / 2);

  for (let y = 0; y < cols; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < rows; x++) {
      vertex(x * scl, y * scl);
      vertex(x * scl, (y + 1) * scl);
    }
    endShape();
  }
}
