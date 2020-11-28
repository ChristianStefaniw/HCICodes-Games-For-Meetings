let plankWidth = 100;
let plankHeight = 20;

let plankList = [];

let gameOver = false;


c.drawCanvas();
b.drawBlock(b.x, b.y);

document.addEventListener("keydown", moveBlock);

genPlanks();

main();

function moveBlock() {
    b.moveBlock(event.keyCode)
}

function genPlanks() {
    for (let i = 0; i < 5; i++) {
        x = Math.floor(Math.random() * (c.canvasWidth - plankWidth))
        y = Math.floor(Math.random() * (c.canvasHeight - plankHeight))

        const plank = new Plank(x, y)

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
        b.moveBlock();
        drawPlanks();
        //p.drawPaddle();
        main();
    }, 50) : null;
}