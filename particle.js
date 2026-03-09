class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.r = random(5, 20);
    this.innerRatio = random(0.2, 0.4);
    this.growth = random(0.5, 1);

    this.alpha = 255;
    this.fade = random(1, 8);

    this.col = color(random(255), random(255), random(255));

    this.isDonut = random() < 0.1; // 30% chance
  }

  update() {
    this.r += this.growth;
    this.innerR += this.growth;
    this.alpha -= this.fade;
  }

  display() {
    noStroke();
    drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = this.col;
	fill(red(this.col), green(this.col), blue(this.col), this.alpha);
	ellipse(this.x, this.y, this.r * 2);
	
	if (this.isDonut) {
    	// Inner hole is always proportional to current outer radius
      	let innerR = this.r * this.innerRatio;
      	fill(0, 0, 0, 100);
      	ellipse(this.x, this.y, innerR * 2);
    }
  }

  isDead() {
    return this.alpha <= 0;
  }
}