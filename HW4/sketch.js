function setup() {
  createCanvas(600, 1000);
}

function draw() {
  background('rgb(255, 244, 159)');

  // creating the MAIN SANDBOX for entire character
  push();

  // move XY coordinate grid to center of createCanvas
  translate(300, 500);

  // drawing legs - there are four total
  push();
  noStroke();
  fill('rgb(135, 248, 107)');
  // draw leftmost leg
  quad(-160, -40, -120, -40, --180, -120, -220, -120);

  pop();
  pop();

}
