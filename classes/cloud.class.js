class Cloud extends MovableObject {
    y = 20;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/img/5_background/layers/4_clouds/1.png');

        this.x = + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => { // läst wolken nach links bewegen
            this.x -= 0.10; // 0,25 Pixsel pro sekunde
        }, 1000 / 60); // zeitintervall 1000 millisekunden durch 60 entspricht 60 hertz
    }
}