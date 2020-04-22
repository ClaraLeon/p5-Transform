let cnv;

function preload() 
{
  fuente = loadFont('assets/ALIN_KID.ttf');
}

function setup() 
{
  cnv = createCanvas(760, 270, WEBGL);
  cnv.position(220, 95); 
  textFont(fuente);
}

function draw() 
{background(255);

  stroke(0);
  fill("#BFBFFA");
  textSize(30);
  text('ROTATE - Y',100, 0);

  //rotateY(angulo)
   rotateY(millis() / 2000);
  

  //cylinder([radius], [height], [detailX], [detailY], [bottomCap], [topCap])
  fill("#93AD8B");
  cylinder(50, 75, 16, 10);
 
}
 

