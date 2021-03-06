var cat, mouse;
var catImage, mouseImage, catAnimation, mouseAnimation;
var backgroundImage;

function preload() {
    catImage = loadImage("tomOne.png");
    mouseImage = loadImage("jerryOne.png");
    catAnimation = loadAnimation("tomOne.png", "tomTwo.png", "tomThree.png", "tomFour.png");
    mouseAnimation = loadAnimation("jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png");
    backgroundImage = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(700, 600);
    cat.addImage(catImage);
    cat.scale = 0.2;

    mouse = createSprite(300, 600);
    mouse.addImage(mouseImage);
    mouse.scale = 0.2;
}

function draw() {
    background(backgroundImage);
    keyPressed();

    if(cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        cat.addAnimation("catLastImage", catImage);
        cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed(){
    if(keyDown === LEFT_ARROW) {
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catAnimation);
        cat.changeAmimation("catRunning");
    }
}