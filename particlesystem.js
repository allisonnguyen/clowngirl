class ParticleSystem {
  constructor(n, maxParticles) {
    this.particles = [];
    this.n = n;
    this.maxParticles = maxParticles;
  }

  update() {
    // Spawn new particles randomly across screen
    for (let i = 0; i < this.n; i++) {
      if (this.particles.length < this.maxParticles) {
        let x = random(width);
        let y = random(height);
        this.particles.push(new Particle(x, y));
      }
    }

    // Update all particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.display();

      // Remove dead particles from the end of the array first
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}