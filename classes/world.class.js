class World {
    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx; // abkürzung für context
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //leert canvas

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);

        this.ctx.translate(-this.camera_x, 0);

        //wiederholt draw() immer wieder
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(MovableObject) {
        // den character drehen
        if (MovableObject.otherDirection) {
            this.ctx.save();// context speichern
            this.ctx.translate(MovableObject.width, 0); // img spiegeln
            this.ctx.scale(-1, 1); // spiegelt den charecter um seine eigene breite
            MovableObject.x = MovableObject.x * -1; // die x-coordinaten werden gespiegelt
        }
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);
        // den character zurück drehen
        if (MovableObject.otherDirection) {
            MovableObject.x = MovableObject.x * -1;
            this.ctx.restore();
        }
    }
}