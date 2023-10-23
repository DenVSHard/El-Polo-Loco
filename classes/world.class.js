class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/img/5_background/layers/air.png', 0),
        new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 0)
    ];
    clouds = [
        new Cloud()
    ];
    canvas;
    ctx; // abkürzung für context

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //leert canvas

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);

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
        this.ctx.drawImage(MovableObject.img, MovableObject.x, MovableObject.y, MovableObject.width, MovableObject.height);

    }
}