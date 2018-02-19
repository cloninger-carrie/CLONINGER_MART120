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
  quad( -160, 40, -120, 40, -180, 120, -220, 120 );
  quad( -220, 120, -180, 120, -160, 180, -160, 280 );
  // end first leg

  // begin second leg
  quad( -80, 40, -40, 40, -60, 100, -100, 100 );
  triangle( -100, 100, -60, 100, -60, 280 );
  // end second legs

  // begin third leg
  quad( 40, 40, 80, 40, 100, 100, 60, 100 );
  triangle( 60, 100, 100, 100, 60, 280 );
  // end third leg

  // begin fourth leg
  quad( 120, 40, 160, 40, 220, 120, 180, 120 );
  quad( 180, 120, 220, 120, 160, 280, 160, 180 );
  // end fourth leg

  //end sub-SANDBOX for character legs
  pop();

  // begin sub-SANDBOX for character body
  push();
  noStroke();
  fill( 'rgb(47, 179, 126)');

  quad( -200, 40, -100, -100, 100, -100, 200, 40 );

  pop();
  pop();

}
