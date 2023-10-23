class Character extends MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 130;
    IMAGES_WALKING = [
        'img/img/2_character_pepe/2_walk/W-21.png',
        'img/img/2_character_pepe/2_walk/W-22.png',
        'img/img/2_character_pepe/2_walk/W-23.png',
        'img/img/2_character_pepe/2_walk/W-24.png',
        'img/img/2_character_pepe/2_walk/W-25.png',
        'img/img/2_character_pepe/2_walk/W-26.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() { // durchläuft das array IMAGES_WALKING
        setInterval(() => { // animiert den character
            let i = this.currentImage % this.IMAGES_WALKING.length; // % ist ein modulo operator
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++; // springt zum nächsten bild
        }, 100); // alle 100 millisekunden
    }

    jump() {

    }
}