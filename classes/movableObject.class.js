class MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 130;
    imageCache = {};
    currentImage = 0;
    speed = 0.10;
    otherDirection = false;


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
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => { // läst wolken nach links bewegen
            this.x -= this.speed; // 0,25 Pixsel pro sekunde
        }, 1000 / 60); // zeitintervall 1000 millisekunden durch 60 entspricht 60 hertz
    }
}