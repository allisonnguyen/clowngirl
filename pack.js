class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    let angle = random(TWO_PI);
    let speed = random(0.5, 2);
    this.vx = cos(angle) * speed;
    this.vy = sin(angle) * speed;

    this.r = random(5, 20);
    this.growth = random(0.5, 1);

    this.alpha = 255;
    this.fade = random(1, 5);

    this.col = color(random(255), random(255), random(255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.r += this.growth;
    this.alpha -= this.fade;
  }

  display() {
    noStroke();
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = this.col;
    fill(red(this.col), green(this.col), blue(this.col), this.alpha);
    ellipse(this.x, this.y, this.r * 2);
  }

  isDead() {
    return this.alpha <= 0;
  }
}