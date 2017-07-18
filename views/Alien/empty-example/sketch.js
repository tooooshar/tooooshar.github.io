function setup() {
createCanvas(640, 400);
}

function draw() {
  background(150,150,150)
  ellipseMode(CENTER);
  rectMode(CENTER);

  //body
  fill(250, 0, 0);
  rect(320, 200, 50, 150);

  //head
  fill(0, 244, 0);
  ellipse(320, 110, 130, 130);

  //eyes
  fill(250);
  ellipse(290, 111, 25, 80);
}