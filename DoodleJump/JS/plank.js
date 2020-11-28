class Plank {
    constructor(x, y) {
        this.height = 20;
        this.width = 100;

        this.x = x;
        this.y = y;

        this.colour = "purple"
    }

    drawPlank() {
        c.ctx.fillStyle = this.colour;
        c.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}
