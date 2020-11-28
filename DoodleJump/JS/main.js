let plankWidth = 100;
let plankHeight = 20;

let plankList = [];

let gameOver = false;


c.drawCanvas();
p.drawPlayer();

document.addEventListener("keydown", movePlayer);

genPlanks();


main();

function movePlayer() {
    p.movePlayer(event.keyCode)
}

function genPlanks() {
    for (let i = 0; i < 5; i++) {
        x = Math.floor(Math.random() * (c.canvasWidth - plankWidth))
        y = Math.floor(Math.random() * (c.canvasHeight - plankHeight))

        let plankNum = 'plank'+i;

        let img = document.getElementById(plankNum);

        const plank = new Plank(x, y, img)

        plankList.push(plank);
    }
}

function drawPlanks() {
    for (let i = 0; i < plankList.length; i++) {
        plankList[i].drawPlank()
    }
}



function main() {
    !gameOver ? setTimeout(function onTick() {
        c.clearCanvas();
        p.checkHitPlank();
        p.verticalDir();
        p.drawPlayer();
        drawPlanks();
        main();
    }, 50) : null;
}