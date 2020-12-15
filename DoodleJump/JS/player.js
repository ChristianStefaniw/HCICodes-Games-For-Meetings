class Player extends Canvas {
    constructor() {
        super();

        this.width = 70;
        this.height = 70;

        this.x = this.canvasWidth / 2;
        this.y = 65;

        this.xDir = 1;
        this.xSpeed = 10

        this.yDir = 1;


        this.gravity = 3;
        this.gravitySpeed = 2;

        this.dir = "Right";

        this.score = 0;

        this.boundChecks = new BoundCheck();

        this.gameOver = false;

    }
    drawPlayer(dir, plankList) {
        this.verticalDir();
        this.checkHitPlank(plankList);
        this.drawScore();


        //if images are not loaded, load them
        if (this.imgLeft === undefined && dir === 'Left'){
            this.imgLeft = this.playerImage("Left");
            this.imgLeft.onload = () => this.ctx.drawImage(this.imgLeft, this.x, this.y, this.width, this.height);

        } else if (this.imgRight === undefined && dir === 'Right'){
            this.imgRight = this.playerImage("Right");
            this.imgRight.onload = () => this.ctx.drawImage(this.imgRight, this.x, this.y, this.width, this.height);
            
        } else {
            let img = dir === "Left" ? this.imgLeft : this.imgRight;
            this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
        }
    }



    playerImage(dir) {
        let img = new Image();
        img.src = `assets/doodle${dir}.png`;
        img.id = `player${dir}`;
        return img;
    }


    movePlayer(key) {

        const RIGHT_KEY = 39;
        const LEFT_KEY = 37;



        if (key === RIGHT_KEY || key === LEFT_KEY) {
            if (key === RIGHT_KEY) {
                this.xDir = 1;
                this.dir = "Right";
            } else if (key === LEFT_KEY) {
                this.xDir = -1;
                this.dir = "Left";
            }

            this.x += this.xSpeed * this.xDir;

        }
        if (this.boundChecks.hitRight(this.x, this.width)) {
            this.x = this.canvasWidth - this.width;
        } else if (this.boundChecks.hitLeft(this.x)) {
            this.x = 0;
        }

    }

    verticalDir() {
        if (this.gravitySpeed <= 0) {
            this.yDir = 1;
            this.gravitySpeed = 2;
        } else if (this.boundChecks.hitBottom(this.y, this.height)) {
            this.gameOver = true;
        }


        this.gravitySpeed += this.gravity * this.yDir;
        this.y += this.gravitySpeed * this.yDir;
    }

    collision(obj1, obj2) {
        return obj1.x < obj2.x + obj2.width &&
            obj1.x + obj1.width > obj2.x &&
            obj1.y < obj2.y + obj2.height &&
            obj1.y + obj1.height > obj2.y && this.yDir === 1;

    }


    movePlanks(plankList) {
        plankList.forEach(plank => {
            plank.moveDown();
        });
    }


    checkHitPlank(plankList) {
        plankList.forEach(plank => {
            if (this.collision(this, plank)) {
                this.score++;

                this.yDir = -1;
                this.movePlanks(plankList);
            }
        });
    }

    drawScore() {
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white"
        this.ctx.fillText(`${this.score}`, this.canvasWidth / 2, 50)
    }

}
