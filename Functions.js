function updateAll() {
  
  for (var i = 0; i < len; i++) {

    if (i < len - 1) {
      x[i+1] = x[i] + (((r/(i+1))) * cos(angle[i]));
      y[i+1] = y[i] + (((r/(i+1))) * sin(angle[i]));
    }
  }


  for (var i = 0; i < len; i++) {
    if (i%2 == 0) {
      angle[i] += ran[i]
    } else {
      angle[i] -= ran[i]
    }
    angle[i] %= TWO_PI;
  }
  
  vertex(x[len - 1], y[len - 1]);
  
}

function showAll() {

  if (currentTime - lastShown >= showRate) {

    background(10, 0, 0);

    strokeWeight(1);
    stroke(255);

    for (var i = 0; i < len; i++) {
      ellipse(x[i], y[i], (r/(i+1)) * 2, (r/(i+1)) * 2);
    }

    strokeWeight(3);
    stroke(col, 255, 255);

    col += coldir;
    if (col > 358) {
      coldir = -0.3;
    } else if (col <= 0) {
      coldir = 0.3;
    }

    endShape();

    lastShown = currentTime;
  }
}

function createAll() {

  x[0] = width/2;
  y[0] = height/2;

  lastStarted = currentTime;

  for (var i = 0; i < len; i++) {
    do {
      ran[i] = random(-speed, speed);
      ran[i] = floor(ran[i] * precision)/precision;
    } while (ran[i] == 0);
  }

  for (var i = 0; i < len - 1; i++) {
    angle[i] = 0;
    x[i+1] = x[i] + (((r/(i+1))) * cos(angle[i]));
    y[i+1] = y[i] + (((r/(i+1))) * sin(angle[i]));
  }

  angle[len - 1] = 0;

  noFill();

  beginShape();
}