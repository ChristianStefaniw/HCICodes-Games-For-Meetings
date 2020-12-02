class Engine {
    constructor() {
        this.plankList = [];
        this.plankWidth = 150;
        this.plankHeight = 20;
        this.canvas = new Canvas();
    }



    //Functions have their own this - arrow functions do not

    genPlanks(num) {
        let x;
        let y;

        for (let i = 0; i < num; i++) {
            x = Math.floor(Math.random() * (this.canvas.canvasWidth - this.plankWidth))
            y = Math.floor(Math.random() * (this.canvas.canvasHeight - this.plankHeight))

            let plankNum = `plank${i}`;

            let img = document.getElementById(plankNum);

            const plank = new Plank(x, y, img)

            this.plankList.push(plank);
        }
    }

    drawPlanks() {
        this.plankList.forEach(plank => {
            if (plank.y > this.canvas.canvasHeight) {
                plank.y = Math.floor(Math.random() * (100));
                plank.x = Math.floor(Math.random() * (this.canvas.canvasWidth - plank.width));
            } else {
                plank.drawPlank()
            }
        });
    }




    start() {
    
        this.player = new Player();

        document.addEventListener("keydown", e => {
            this.player.movePlayer(e.keyCode)
        });

        this.gameLoop();

    }

    gameLoop() {
        !this.player.gameOver ? setTimeout(() => {
            this.canvas.clearCanvas();
            this.player.drawPlayer(this.plankList);
            this.drawPlanks();
            this.gameLoop();
        }, 50) : null;
    }

}

function startGame() {
    let gameEngine = new Engine();
    gameEngine.canvas.loadCanvas()
    gameEngine.canvas.drawCanvas();
    gameEngine.genPlanks(5);
    gameEngine.start();
}

startGame();