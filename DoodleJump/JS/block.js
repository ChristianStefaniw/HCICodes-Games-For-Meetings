class Block {
    constructor() {

        this.width = 40;
        this.height = 40;

        this.x = 0;
        this.y = 65;

        this.xVector = 1;
        this.xVelocity = 10

        this.yVector = 1;
        this.yVelocity = 5;


        this.colour = "red"

        this.gravity = 0.2;
        this.gravitySpeed = 2;

        this.gravityVector = 1;

        this.bottom = c.canvasHeight - this.height;
        this.top = 0;


        this.score = 0;
    }

    drawBlock() {
        c.ctx.fillStyle = this.colour;
        c.ctx.fillRect(this.x, this.y, this.width, this.height)
    }



    moveBlock(key) {

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

        this.checkHitPlank();
        this.verticalDir()

        this.drawBlock(this.x, this.y);

    }

    verticalDir(){
        if (this.y <= 0){
            this.yVector = 1;
            this.gravitySpeed = 9;
            this.y = 0;
        } else if (this.y >= this.bottom){
            document.getElementById("over").innerHTML = "GAME OVER";
            gameOver = true;
        }
        this.gravitySpeed += this.gravity * this.gravityVector;
        this.y += this.gravitySpeed * this.yVector;
    }


    checkHitPlank(){
        for (let i = 0; i < plankList.length; i++) {
            let currPlank = plankList[i];
    
            if (currPlank.x < b.x + b.width &&
                currPlank.x + currPlank.width > b.x &&
                currPlank.y < b.y + b.height &&
                currPlank.y + currPlank.height > b.y) {
                    b.yVector = -1;
             }
    
        }
    }

}


const b = new Block()
