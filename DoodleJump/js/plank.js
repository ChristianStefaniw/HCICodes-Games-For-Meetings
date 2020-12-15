class Plank extends Canvas {
    constructor(x, y, img) {
        super();
        this.height = 20;
        this.width = 100;

        this.x = x;
        this.y = y;

        this.img = img;

        this.movingDown = false;
    }


    drawPlank() {
        this.img.onload == null
            ? this.img.onload = () => this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            : this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveDown() {
        if (!this.movingDown){
            this.movingDown = true;
            let newY = this.y + 200;
            let interval = setInterval(() => {
                this.y += 10;
                if (this.y > newY || this.y > this.canvasHeight) {
                    this.movingDown = false;
                    clearInterval(interval)
                }
            }, 50)
        }

    }


}
