var currentTime = 0;
var pastTime = 0;
var deltaTime = 0;

var lastShown = 0;
var showRate = 5;

function timeCalc(){
  
  pastTime = currentTime;
  currentTime = millis();
  pastTime = currentTime - pastTime;
  
}