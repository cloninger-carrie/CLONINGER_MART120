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

  // end sub-SANDBOX for character legs
  pop();

  // begin sub-SANDBOX for character body
  push();
  noStroke();
  fill( 'rgb(47, 179, 126)');

  quad( -200, 40, -100, -100, 100, -100, 200, 40 );
  quad( -60, -100, -20, -140, 20, -140, 60, -100 );
  triangle( -10, -140, 10, -140, 0, -160 );

  // end sub-SANDBOX for character body
  pop();

  // begin sub-SANDBOX for character head
  push();
  noStroke();
  fill( 'rgb(255, 61, 67)');

  triangle( 0, -160, -40, -200, 40, -200 );
  quad( -60, -260, 60, -260, 40, -200, -40, -200 );
  quad( -100, -340, 100, -340, 120, -260, -120, -260 );

  // begin sub-SANDBOX for character mouth
  push();
  noStroke();
  fill( 'rgb(254, 161, 55)');

  triangle( 0, -200, -20, -260, 20, -260 );

  strokeWeight(10);
  stroke( 'rgb(254, 161, 55)');
  line( -60, -280, -40, -260 );
  line( -40, -260, 40, -260 );
  line( 40, -260, 60, -280 );
  // end sub-SANDBOX for character mouth
  pop();

  // begin sub-SANDBOX for character cheeks
  push();
  noStroke();
  fill( 'rgb(255, 60, 154)');

  rect( -100, -320, 40, 40, 20 );
  rect( 60, -320, 40, 40, 20 );
  // end sub-SANDBOX for character cheeks
  pop();

  // begin sub-SANDBOX for character eye
  push();
  stroke( 'rgb(255, 61, 67)');
  fill( 'white');
  ellipse( 0, -320, 80, 80 );

  stroke( 'rgb(29, 150, 110)');
  fill( 'rgb(5, 221, 116)');
  ellipse( 0, -320, 40, 40 );

  strokeWeight(10);
  stroke('black');
  point( 0, -320);

  // end sub-SANDBOX for character eye
  pop();


  pop();
  pop();

}
