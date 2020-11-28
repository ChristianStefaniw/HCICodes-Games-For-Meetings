class Paddle {
    constructor() {
        this.height = 20;
        this.width = 50

        this.x = 0;
        this.offSet = 15
        this.y = c.canvasHeight - this.height - this.offSet;
    

        this.xVelocity = 10;
        this.xVector = 1;

        this.colour = "purple"
    }

    drawPaddle() {
        c.ctx.fillStyle = this.colour;
        c.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    movePaddle(key) {

        console.log(this.xVector);

        const RIGHT_KEY = 39;
        const LEFT_KEY = 37;

        if (key === RIGHT_KEY || key === LEFT_KEY) {
            if (key === RIGHT_KEY) {
                this.xVector = 1;
            } else if (key === LEFT_KEY) {
                this.xVector = -1;
            }

            this.x += this.xVelocity * this.xVector;

        }
    }

}

const p = new Paddle()
