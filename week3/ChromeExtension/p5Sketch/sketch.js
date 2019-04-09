//include p5 libraries
//"js" : ["p5.js", "p5.dom.js", "p5.sound.js", "sketch.js"] in sequence

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  clear();
}

function draw() {
  stroke(100);
  strokeWeight(4);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
