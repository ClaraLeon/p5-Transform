let cnv;

function preload() 
{
  fuente = loadFont('assets/ALIN_KID.ttf');
}

function setup() 
{
  cnv = createCanvas(760, 270);
  cnv.position(220, 95); 
  textFont(fuente);
}

function draw() 
{
  background(255);
  stroke(0);
  fill("#BFBFFA");
  textSize(30);
  text('Scale',50, 50);

  fill("#8C7E77");
  rect(345, 100,20,90);
  fill("#B4D4A9");
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(350, 20, 300, 100, 400, 100);

  //scale(s, [y], [z])
  //scale(scales)
  scale(0.9, 1.3);
  fill("#8C7E77");
  rect(345, 100,20,90);
  fill("#B4D4A9");
  triangle(350, 20, 300, 100, 400, 100);



  scale(0.8);
  fill("#8C7E77");
  rect(345, 100,20,90);
  fill("#B4D4A9");
  triangle(350, 20, 300, 100, 400, 100);



}
