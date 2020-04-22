let cnv;

function preload() 
{
  fuente = loadFont('assets/ALIN_KID.ttf');
}

function setup() 
{
  cnv = createCanvas(760, 270, WEBGL);
  cnv.position(220, 95); //posición de donde ponerlo
  textFont(fuente);
}


function draw() 
{
  background(255);

  stroke(0);
  fill("#BFBFFA");
  textSize(30);
  text('ROTATE - X',100, 0);

  //rotateX(angulo)
  rotateX(millis() / 500);
  
  //sphere(scale, x, y);
  fill("#93AD8B");
  sphere(80, 10, 5);
}