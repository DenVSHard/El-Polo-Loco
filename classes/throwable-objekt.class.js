class ThrowableObject extends MovableObject {

    constructor(x,y) {
        super().loadImage('img/img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 60;
        this.throw(200, 200);
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}