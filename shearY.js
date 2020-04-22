let cnv;
let angulo=50;

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
  text('Shear Y',50, 50);

  translate(width/2, height/2);
  shearY(angulo);
  fill("#8C7E77");
  circle(0, 0, 40);

  angulo= angulo+ 0.01;
}