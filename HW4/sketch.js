function setup() {
  // create canvas for project and set parameters to Y = 1000 and X = 600
  createCanvas( 600, 1000);
}

function draw() {
  // choose light color for background usin gRGB color mode
  background( 'rgb(223, 255, 159)');

  // begin MAIN SANDBOX for the entirety of the character
  // set the center of the coordinate grid to the center of the canvas
  push();
  translate( 300, 500 );

  // begin sub-SANDBOX for character legs - four total
  push();
  noStroke();
  fill( 'rgb(93, 128, 25)');

  // begin first leg
  quad( 160, -40, 120, -40, 180, -120, 220, -120 );
  pop();
  pop();

}
