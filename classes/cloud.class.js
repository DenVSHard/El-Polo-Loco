class Cloud extends MovableObject {
  y = 20;
  width = 720;
  height = 200;
  speed = 0.03;

  constructor(initialX) {
    super().loadImage('img/img/5_background/layers/4_clouds/full.png');
  
    this.x = initialX;
    this.animate();
  }

  animate() {
    setInterval(() => { // läst wolken nach links bewegen
      this.moveLeft();
    }, 1000 / 60);
  }
}