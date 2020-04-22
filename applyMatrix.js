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

  frameRate(10);

}

function draw() 
{
  background(255);
  translate(-150, -50);


  stroke(0);
  fill("#BFBFFA");
  textSize(20);
  text('ApplyMatrix',-200, -40);
  text('translate',0, -10);
  text('scale',200, -10);

 
  let step = frameCount % 20;

  applyMatrix(1.2, 0, 0, 1.2, 50, 50 + step);
  cone(35, 60, 20);


  applyMatrix(1/ step, 0, 0, 1, 150, 0);
  cone(35, 60, 20);


}