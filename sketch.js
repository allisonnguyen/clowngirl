let system;

let myStar;
let showStar = false;
let starX;
let starY;

let myCircle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  system = new ParticleSystem(1, 25);
}

function draw() {
  background(0);

  push();
  system.update();
  pop();

  if (showStar) {
    push();
    translate(starX, starY);
    rotate(frameCount / 20.0);

    myStar.update();
    myStar.display();

    myCircle.update();
    myCircle.display();
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  myStar = new Star(0, 0, 20, 70, 40, 8, 2);
  starX = mouseX;
  starY = mouseY;
  showStar = true;

  myCircle = new Circle(0, 0, 100, 4);
}
