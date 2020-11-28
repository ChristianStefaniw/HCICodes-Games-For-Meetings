class Canvas{
    constructor(){
        this.canvas = document.getElementById("board");
        this.ctx = this.canvas.getContext("2d")
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.background = 'grey';
    }

    drawCanvas(){
        this.ctx.fillStyle = this.background;
        this.ctx.fillRect(0, 0, c.canvas.width, c.canvas.height);
    }

    clearCanvas(){
        this.ctx.fillStyle = this.background;
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}

const c = new Canvas();
