class Player {
    constructor() {

        this.width = 70;
        this.height = 70;

        this.x = 0;
        this.y = 65;

        this.xVector = 1;
        this.xVelocity = 10

        this.yVector = 1;


        this.gravity = 0.2;
        this.gravitySpeed = 2;

        this.gravityVector = 1;

        this.bottom = c.canvasHeight - this.height;


        this.imgRight = document.getElementById("playerRight");
        this.imgLeft = document.getElementById("playerLeft");
        this.loadedImg = this.imgRight;
    }

    drawPlayer() {
        c.ctx.drawImage(this.loadedImg, this.x, this.y, this.width, this.height)
    }



    movePlayer(key) {

        const RIGHT_KEY = 39;
        const LEFT_KEY = 37;

        

        if (key === RIGHT_KEY || key === LEFT_KEY) {
            if (key === RIGHT_KEY) {
                this.xVector = 1;
                this.loadedImg = this.imgRight;
            } else if (key === LEFT_KEY) {
                this.xVector = -1;
                this.loadedImg = this.imgLeft;
            }

            this.x += this.xVelocity * this.xVector;

        }

        if (hitRight(this.x, this.width)){
            this.x = c.canvasWidth-this.width;
        } else if (hitLeft(this.x)){
            this.x = 0;
        }

    }

    verticalDir() {
        if (this.gravitySpeed <= 0) {
            this.yVector = 1;
            this.gravityVector = 1;
            this.gravitySpeed = 2;
        } else if (hitBottom(this.y, this.height)) {
            document.getElementById("over").innerHTML = "GAME OVER";
            gameOver = true;
        }
        this.gravitySpeed += this.gravity * this.gravityVector;
        this.y += this.gravitySpeed * this.yVector;
    }

    collision(obj1, obj2) {
        if (obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y) {
            return true;
        }
        return false;
    }


    checkHitPlank() {
        for (let i = 0; i < plankList.length; i++) {
            let currPlank = plankList[i];

            if (this.collision(this, currPlank)) {
                this.yVector = -1;
                this.gravityVector = -1;
            }

        }
    }

}


const p = new Player()
