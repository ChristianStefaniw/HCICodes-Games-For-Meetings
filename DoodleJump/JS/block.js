class Block {
    constructor() {

        this.width = 40;
        this.height = 40;

        this.x = 0;
        this.y = 0;

        this.xVector = 1;
        this.xVelocity = 5


        this.colour = "red"

        this.gravity = 0.2;
        this.gravitySpeed = 9;

        this.gravityVector = 1;

        this.bottom = c.canvasHeight - this.height;
        this.top = 0;

        this.once = false;

        this.score = 0;
    }

    drawBlock() {
        c.ctx.fillStyle = this.colour;
        c.ctx.fillRect(this.x, this.y, this.width, this.height)
    }



    moveBlock() {

        if (hitPaddle(this, p)) {
            this.gravityVector = -1;
            this.gravitySpeed = -9;
            this.y = this.bottom-p.height - p.offSet;
        } else if (hitTop(this.y)){
            this.gravityVector = 1;
            this.gravitySpeed = 9;
            this.y = 0;
        } else if (hitBottom(this.y, this.height)){
            this.score++
            this.gravityVector = -1;
            this.gravitySpeed = -9;
            this.y = this.bottom;
            document.getElementById('score').innerHTML = this.score;
        }

        if (hitRight(this.x, this.width)){
            this.xVector = -1;
        } else if (hitLeft(this.x)){
            this.xVector = 1;
        }

        console.log(Math.random()*10);


        this.gravitySpeed += this.gravity * this.gravityVector;
        this.y += this.gravitySpeed;
        this.x += this.xVelocity * this.xVector;


        this.drawBlock(this.x, this.y);

    }



}


const b = new Block()
