class Circle {
	constructor(x, y, rMax, growthSpeed) {
	    this.x = x;
	    this.y = y;

	    this.r = 0;              // start at 0
	    this.rMax = rMax;        // max size
	    this.growthSpeed = growthSpeed;

	    this.direction = 1;      // 1 = growing, -1 = shrinking
	    this.finished = false;
	}

	update() {
	    if (this.finished) return;

	    this.r += this.growthSpeed * this.direction;

	    // switch to shrinking
	    if (this.direction === 1 && this.r >= this.rMax) {
	      this.direction = -1;
	    }

	    // stop when fully shrunk
	    if (this.direction === -1 && this.r <= 0) {
	      this.finished = true;
	      this.r = 0;
	    }
	}

	display() {
		if (this.finished) return;

		noFill();
		stroke(255, 255, 255);
		strokeWeight(1.5);
		ellipse(this.x, this.y, this.r * 2, this.r * 2);
	}
}
