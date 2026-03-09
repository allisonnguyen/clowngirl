class Star {
  constructor(x, y, innerRadiusMax, outerRadiusLongMax, outerRadiusShortMax, npoints, growthSpeed = 2) {
    this.x = x;
    this.y = y;

    // Start at 0
    this.innerRadius = 0;
    this.outerRadiusLong = 0;
    this.outerRadiusShort = 0;

    // Maximum size
    this.innerRadiusMax = innerRadiusMax;
    this.outerRadiusLongMax = outerRadiusLongMax;
    this.outerRadiusShortMax = outerRadiusShortMax;

    this.npoints = npoints;

    this.angle = TWO_PI / this.npoints;
    this.halfAngle = this.angle / 2.0;

    this.growthSpeed = growthSpeed;
    this.direction = 1; // 1 = growing, -1 = shrinking
    this.finished = false; // true when fully shrunk
  }

  update() {
    if (this.finished) return;

    // Update radii
    this.innerRadius += this.growthSpeed * 0.3 * this.direction;
    this.outerRadiusLong += this.growthSpeed * this.direction;
    this.outerRadiusShort += this.growthSpeed * 0.7 * this.direction;

    // Switch from growing to shrinking at max size
    if (this.direction === 1 && this.outerRadiusLong >= this.outerRadiusLongMax) {
      this.direction = -1;
    }

    // Stop updating when fully shrunk
    if (this.direction === -1 && this.outerRadiusLong <= 0) {
      this.finished = true;
      this.outerRadiusLong = 0;
      this.outerRadiusShort = 0;
      this.innerRadius = 0;
    }
  }

  display() {
    noStroke();
    fill(255, 255, 255, 255);
    if (this.finished) return; // don’t draw after finished

    beginShape();
    for (let i = 0; i < this.npoints; i++) {
      let a = i * this.angle;
      let currentOuterRadius = (i % 2 === 0) ? this.outerRadiusLong : this.outerRadiusShort;

      let sx = this.x + cos(a) * currentOuterRadius;
      let sy = this.y + sin(a) * currentOuterRadius;
      vertex(sx, sy);

      sx = this.x + cos(a + this.halfAngle) * this.innerRadius;
      sy = this.y + sin(a + this.halfAngle) * this.innerRadius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}