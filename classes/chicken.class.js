class Chicken extends MovableObject {
    y = 375;
    height = 50;
    width = 50;

    IMAGES_WALKING = [
        'img/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    constructor() {
        super().loadImage('img/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.10 + Math.random() * 0.8;

        this.animate()
    }

    animate() { // durchläuft das array IMAGES_WALKING
        this.moveLeft();

        setInterval(() => { // animiert den character
            let i = this.currentImage % this.IMAGES_WALKING.length; // % ist ein modulo operator
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++; // springt zum nächsten bild
        }, 100); // alle 100 millisekunden
    }
}