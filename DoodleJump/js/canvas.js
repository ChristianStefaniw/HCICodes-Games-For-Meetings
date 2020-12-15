class Canvas{
    constructor() {
        this.canvas = document.getElementById("board");
        this.ctx = this.canvas.getContext("2d")
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
    }

    clearCanvas() {
        this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvasWidth, this.canvasHeight)
    }


    loadBackground() {
        this.backgroundImg = new Image();
        this.backgroundImg.src = 'assets/background.jpg';
        this.backgroundImg.onload = () => {
            this.ctx.drawImage(this.backgroundImg, 0, 0, this.canvasWidth, this.canvasHeight)
        }

    }

    loadCanvas() {
        this.loadBackground();
    }

}
