var cat, mouse;
var catImage, mouseImage, catAnimation, mouseAnimation;
var backgroundImage;

function preload() {
    catImage = loadImage("images/tomOne.png");
    mouseImage = loadImage("images/mouseOne.png");
    catAnimation = loadAnimation("images/tomOne.png", "tomTwo.png", "tomThree.png", "tomFour.png");
    mouseAnimation = loadAnimation("images/jerryOne.png", "jerryTwo.png", "jerryThree.png", "jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(700, 600);
    cat.addImage(catImage);

    mouse = createSprite(300, 600);
    mouse.addImage(mouseImage);
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
