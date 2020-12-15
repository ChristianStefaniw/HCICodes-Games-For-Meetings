class BoundCheck extends Canvas{
    hitTop(y) {
        if (y <= 0) {
            return true;
        } else {
            return false;
        }
    }


    hitPaddle(block, paddle) {
        if (block.x < paddle.x + paddle.width &&
            block.x + block.width > paddle.x &&
            block.y < paddle.y + paddle.height &&
            block.y + block.height > paddle.y) {
            return true;
        } else {
            return false;
        }
    }

    hitBottom(y, height) {
        if (y + height >= this.canvasHeight) {
            return true;
        } else {
            return false;
        }
    }

    hitRight(x, width) {
        if (x + width >= this.canvasWidth) {
            return true;
        } else {
            return false;
        }
    }

    hitLeft(x) {
        if (x <= 0) {
            return true;
        } else {
            return false;
        }
    }
}