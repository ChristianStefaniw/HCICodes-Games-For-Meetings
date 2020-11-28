class Plank {
    constructor(x, y, img) {
        this.height = 20;
        this.width = 150;

        this.x = x;
        this.y = y;


        this.img = img;
    }

    drawPlank() {
        c.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}
