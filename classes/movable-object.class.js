class MovableObject extends DrawableObject {
  
    speed = 0.10;
    otherDirection = false; // Spiegeln
    speedY = 0;
    acceleration = 2.5; // Gravitationsgeschwindigkeit
    energy = 100;
    lastHit = 0;

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

    /*Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding(obj) {
        return (this.x + this.width) >= obj.X && this.x <= (obj.X + obj.width) &&
            (this.y + this.offsetY + this.height) >= obj.Y &&
            (this.y + this.offsetY) <= (obj.Y + obj.height) &&
            obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }*/

    /*isColliding(MovableObject) {
        return (this.x + this.width) >= MovableObject.x && this.x <= (MovableObject.x + MovableObject.width) &&
            (this.y + this.offsetY + this.height) >= MovableObject.y &&
            (this.y + this.offsetY) <= (MovableObject.Y + MovableObject.height) &&
            MovableObject.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }*/

    isColliding(MovableObject) {
        return this.x + this.width > MovableObject.x &&
            this.y + this.height > MovableObject.y &&
            this.x < MovableObject.x &&
            this.y < MovableObject.y + MovableObject.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
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
        let i = this.currentImage % images.length; // % ist ein modulo operator
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++; // springt zum nächsten bild
    }
}