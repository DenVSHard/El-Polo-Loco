class MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 130;
    imageCache = {};
    currentImage = 0;
    speed = 0.10;
    otherDirection = false; // Spiegeln
    speedY = 0;
    acceleration = 2.5; // Gravitationsgeschwindigkeit

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() { // Ob der Character über dem boden ist
        return this.y < 180;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) { // durchläuft das json array mit den character bildern
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 25; // höhe des Sprungs
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // % ist ein modulo operator
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; // springt zum nächsten bild
    }
}