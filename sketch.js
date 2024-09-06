let cols, rows;
let scl = 20;
let terrain = [];

let w, h;
let flying = 0;

let checkbox;
let pause = false;

function setup() {
  createCanvas(600, 600, WEBGL);

  w = width * 4;
  h = height * 4;
  cols = w / scl;
  rows = h / scl;

  checkbox = createCheckbox();
  checkbox.position(10, 10);

  checkbox.changed(() => {
    if (checkbox.checked()) {
      noLoop();
    } else {
      loop();
    }
  });

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  flying -= 0.2;

  let yoff = flying;
  for (var y = 0; y < cols; y++) {
    let xoff = 0;
    for (var x = 0; x < rows; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background(0);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  for (let y = 0; y < cols; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < rows - 1; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
