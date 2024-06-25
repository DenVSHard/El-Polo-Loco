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
        this.x = 300 + Math.random() * 500;
        this.speed = 0.10 + Math.random() * 0.8;

        this.animate()
    }

    animate() { // durchläuft das array IMAGES_WALKING

        setInterval(() => { // läst Chicken nach links bewegen
            this.moveLeft();
        }, 1000 / 60); // zeitintervall 1000 millisekunden durch 60 entspricht 60 hertz

        setInterval(() => { // animiert das Chicken
            this.playAnimation(this.IMAGES_WALKING);
        }, 100); // alle 100 millisekunden
    }
}