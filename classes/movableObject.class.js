class MovableObject {
    x = 120;
    y = 180;
    img;
    height = 250;
    width = 130;
    imageCache = {};

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

    }
}