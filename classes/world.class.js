class World {
    character = new Character();
    level = level1;
    canvas; // ist der schwarze Bilschirm mit den X Y koordinaten.
    ctx; // abkürzung für context sorgt dafür das man auf canvas zeichnen kann.
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d'); //sorgt dafür das man auf canvas zeichnen kann in 2d.
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowableObjects();
        }, 200);
    }

    // Flaschenwurf
    checkThrowableObjects() {
        if (this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x + 80, this.character.y + 120);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    // Zeichnen in canvas
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //leert canvas

        this.ctx.translate(this.camera_x, 0); //Camera nach vorne vershieben

        this.addObjectsToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies); // Objekte hinzufügen
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0); //Camera nach hinten vershieben
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); //Camera nach vorne vershieben


        this.ctx.translate(-this.camera_x, 0); //Camera nach hinten vershieben

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
            this.flipImage(MovableObject);
        }

        MovableObject.draw(this.ctx);
        MovableObject.drawFrame(this.ctx);

        // den character zurück drehen
        if (MovableObject.otherDirection) {
            this.flipImageBack(MovableObject);
        }
    }

    flipImage(MovableObject) {
        this.ctx.save();// context speichern
        this.ctx.translate(MovableObject.width, 0); // img spiegeln
        this.ctx.scale(-1, 1); // spiegelt den charecter um seine eigene breite
        MovableObject.x = MovableObject.x * -1; // die x-coordinaten werden gespiegelt
    }

    flipImageBack(MovableObject) {
        MovableObject.x = MovableObject.x * -1;
        this.ctx.restore();
    }
}