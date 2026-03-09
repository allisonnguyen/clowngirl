class Circle {
	constructor(x, y, d) {
		this.x = x;
		this.y = y;
		this.d = d;
	}

	display() {
		noFill();
		stroke(255, 255, 255);
		strokeWeight(1.5);
		ellipse(this.x, this.y, this.d, this.d);
	}
}