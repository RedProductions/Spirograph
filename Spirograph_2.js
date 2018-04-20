function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  frameRate(240);
  colorMode(HSB);
  
  timeCalc();
  
  createAll();
  
}

function draw() {
  
  timeCalc();
  
  showAll();
  
  updateAll();
  
}

function mousePressed(){
  
  createAll();
  
}