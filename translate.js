let cnv;
let angulo = 0.01;

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
  strokeWeight(1);
  fill("#BFBFFA");
  textSize(30);
  text('Translate',50, 50);

  //translate(x, y, [z])
  //translate(vector)
  translate(width /2, height /2);

  rotate(angulo);
  stroke("#C7AC9F");
  strokeWeight(4);
  fill("#C7AC9F");
  line(0,0,50,50);
  ellipse(50, 50, 55, 55);
  angulo= angulo + 0.01;

}
