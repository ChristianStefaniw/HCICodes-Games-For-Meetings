class Canvas{
    constructor() {
        this.canvas = document.getElementById("board");
        this.ctx = this.canvas.getContext("2d")
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
    }

    drawCanvas() {
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    clearCanvas() {
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvasWidth, this.canvasHeight)
    }

    showImage(src, id) {
        let img = document.createElement("img");
        img.src = src;
        img.id = id;
        img.width = 0;
        img.height = 0;
        document.body.append(img);
    }

    loadPlanks(num) {
        for (let i = 0; i < num; i++) {
            this.showImage('assets/plank.png', `plank${i}`);
        }
    }

    loadBackground() {
        this.backgroundImg = new Image();
        this.backgroundImg.src = 'assets/background.jpg';
        this.backgroundImg.onload = () => {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvasWidth, this.canvasHeight)
        }

    }

    loadCanvas() {
        this.showImage('assets/doodleLeft.png', 'playerLeft');
        this.showImage('assets/doodleRight.png', 'playerRight');
        this.loadPlanks(5);
        this.loadBackground();
    }

}
