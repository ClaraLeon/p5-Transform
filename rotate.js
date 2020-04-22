
let cnv;

function preload() 
{
  fuente = loadFont('assets/ALIN_KID.ttf');
}

function setup() 
{
  cnv = createCanvas(760, 270);
  cnv.position(220, 95); //posición de donde ponerlo
  textFont(fuente);

}

function draw() 
{
  stroke(0);
  fill("#BFBFFA");
  textSize(30);
  text('ROTATE',50, 50);

  //Las figuras se posicionan apartir de este punto
  translate(100, 100);

  //ROTAR 1 ---------------------------------------------------------
  rotate(PI / 4.0);
  fill("#93AD8B");
  //square(x segun translate, y segun translate, width, heigth);
  square(0, 0, 55, 20);
  square(95, -95, 55, 20);
  square(190, -190, 55, 20);

  //ROTAR 2 ---------------------------------------------------------
  rotate(PI / 2);
  fill("#5D6E58");
  square(-65, -85, 55, 20);
  square(-160, -180, 55, 20);
}