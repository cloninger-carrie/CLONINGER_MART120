function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('rgb(153, 255, 153)');

  // creating the MAIN SANDBOX for entire character
  push();

  // move XY coordinate grid to center of createCanvas
  translate(500, 500);

  // drawing legs - there are four total
  push();
  noStroke();
  fill('rgb(135, 248, 107)');
  // draw leftmost leg
  quad(-160, -20, -120, -20, -180, -120, -220, -120);
  quad(-220, -120, -180, -120, -160, -180, -160, -280);
  // draw left, inside leg
  quad(-80, -40, -40, -40, -60, -100, -100, -100);
  triangle(-60, -100, -100, -100, -60, -280);
  pop();
  pop();

}
