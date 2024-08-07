class Endboss extends MovableObject {

    height = 400;
    width = 350;
    y = 55;

    IMAGES_WALKING = [
        'img/img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/img/4_enemie_boss_chicken/2_alert/G12.png',

    ];

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 720*3;
        this.animate();
    }

    animate(){
        setInterval(() => { // animiert das Chicken
            this.playAnimation(this.IMAGES_WALKING);
         }, 300); // alle 100 millisekunden
    }

}