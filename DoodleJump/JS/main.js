
c.drawCanvas();
b.drawBlock(b.x, b.y);
p.drawPaddle(p.x, p.y)

document.addEventListener("keydown", movePaddle);


main();

function movePaddle() {
    p.movePaddle(event.keyCode)
}

function main() {
    setTimeout(function onTick() {
        c.clearCanvas();
        b.moveBlock();
        p.drawPaddle();
        main();
    }, 50)
}