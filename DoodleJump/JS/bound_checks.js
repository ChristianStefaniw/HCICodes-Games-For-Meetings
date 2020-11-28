function hitTop(y){
    if (y <= 0){
        return true;
    } else {
        return false;
    }
}


function hitPaddle(block, paddle){
    if (block.x < paddle.x + paddle.width &&
        block.x + block.width > paddle.x &&
        block.y < paddle.y + paddle.height &&
        block.y + block.height > paddle.y){
        return true;
    } else {
        return false;
    }
}

function hitBottom(y, height){
    if (y + height >= c.canvasHeight){
        return true;
    } else {
        return false;
    }
}

function hitRight(x, width){
    if (x + width >= c.canvasWidth){
        return true;
    } else {
        return false;
    }
}

function hitLeft(x){
    if (x <= 0){
        return true;
    } else {
        return false;
    }
}