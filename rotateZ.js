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

  noStroke();
  fill("#BFBFFA");
  textSize(30);
  text('ROTATE - Z',100, 0);

  //rotateZ(angulo)
  rotateZ(millis() / 1000);

  //torus([radius], [tubeRadius], [detailX], [detailY])
  fill("#B4D4A9");
  torus(30, 15, 6, 12);

  rotateZ(millis() / -500);
  fill("#8C7E77");
  torus(35, 12, 5, 6);
}
