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

  frameRate(10);

}

function draw() 
{
  background(255);


  stroke(0);
  fill("#BFBFFA");
  textSize(20);
  text('ReserMatrix',50, 50);

   let step = frameCount % 20;
  let angle = map(step, 0, 20, -PI / 4, PI / 4);

  translate(width/2, height/2);

  fill("#69698A");

  let shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);
  ellipse(0, 0, 55, 55);

  resetMatrix();
  ellipse(0, 0, 55, 55);


}