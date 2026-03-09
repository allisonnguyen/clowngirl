let system;

let myStar;
let showStar = false;
let starX;
let starY;

let myCircle;



function setup() {
  let holder = document.getElementById("sketch-holder");
  // holder.offsetWidth reads rendered width of the div
  // canvas resizes with the container
  canvas = createCanvas(holder.offsetWidth, holder.offsetWidth * 0.7);
  canvas.parent("sketch-holder");

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
  let holder = document.getElementById("sketch-holder");
  resizeCanvas(holder.offsetWidth, holder.offsetWidth * 0.7);
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {

    myStar = new Star(0, 0, 20, 70, 40, 8, 2);
    starX = mouseX;
    starY = mouseY;
    showStar = true;

    myCircle = new Circle(0, 0, 100, 4);
  }
}
