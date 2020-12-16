class BoundCheck extends Canvas{
    hitBottom(y, height) {
        return y + height >= this.canvasHeight;
    }

    hitRight(x, width) {
        return x + width >= this.canvasWidth;
    }

    hitLeft(x) {
        return x <= 0;
    }
}
