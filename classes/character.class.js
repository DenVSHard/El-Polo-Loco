class Character extends MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 130;
    speed = 4;
    IMAGES_WALKING = [
        'img/img/2_character_pepe/2_walk/W-21.png',
        'img/img/2_character_pepe/2_walk/W-22.png',
        'img/img/2_character_pepe/2_walk/W-23.png',
        'img/img/2_character_pepe/2_walk/W-24.png',
        'img/img/2_character_pepe/2_walk/W-25.png',
        'img/img/2_character_pepe/2_walk/W-26.png'
    ];
    world;

    constructor() {
        super().loadImage('img/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() { // durchläuft das array IMAGES_WALKING
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x; // bewegt die camera mit und fexirt sie auf den charecter
        }, 1000 / 60);

        setInterval(() => { // animiert den character
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // wenn pfeil nach rechts gedrückt wird
                let i = this.currentImage % this.IMAGES_WALKING.length; // % ist ein modulo operator
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++; // springt zum nächsten bild
            }
        }, 50); // alle 100 millisekunden
    }

    jump() {

    }
}