class World {
    character = new Character();
    level = level1;
    canvas; // ist der schwarze Bilschirm mit den X Y koordinaten.
    ctx; // abkürzung für context sorgt dafür das man auf canvas zeichnen kann.
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); //sorgt dafür das man auf canvas zeichnen kann in 2d.
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    // Zeichnen in canvas
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //leert canvas

        this.ctx.translate(this.camera_x, 0); //Camera vershieben

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0); //Camera zurück vershieben

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