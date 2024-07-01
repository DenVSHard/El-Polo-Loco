const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],

    [
        new Cloud(-720),
        new Cloud(0),
        new Cloud(720),
        new Cloud(720*2),
        new Cloud(720*3),
        new Cloud(720*4)
    ],
    
    [
        new BackgroundObject('img/img/5_background/layers/air.png', -719),
        new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/img/5_background/layers/air.png', 0),
        new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/img/5_background/layers/air.png', 719),
        new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img/img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/img/5_background/layers/1_first_layer/2.png', 719 * 3)
    ]
);