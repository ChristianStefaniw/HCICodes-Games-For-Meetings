class Engine {
    constructor() {
        this.plankList = [];
        this.plankWidth = 150;
        this.plankHeight = 20;
        this.canvas = new Canvas();
    }


    genPlanks(num) {
        let x;
        let y;

        for (let i = 0; i < num; i++) {
            x = Math.floor(Math.random() * (this.canvas.canvasWidth - this.plankWidth))
            y = Math.floor(Math.random() * (this.canvas.canvasHeight - this.plankHeight))

            let plankNum = `plank${i}`;


            let img = this.plankImage(plankNum);
            
            const plank = new Plank(x, y, img)

            this.plankList.push(plank);
        }
    }

    plankImage(plankNum){
        let img = new Image();
        img.id = plankNum;
        img.src = 'assets/plank.png';
        return img;
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


    start = () => {
    
        this.canvas.loadCanvas();
        this.genPlanks(5);
        this.player = new Player();

        document.addEventListener("keydown", e => {
            this.player.movePlayer(e.keyCode)
        });

        this.gameLoop();
    }

    gameLoop() {
        !this.player.gameOver ? setTimeout(() => {
            this.canvas.clearCanvas();
            this.drawPlanks();
            this.player.drawPlayer(this.player.dir, this.plankList);
            this.gameLoop();
        }, 50) : this.endGame();
    }

    endGame(){
        let restartListener = (e) => {
            if (e.keyCode === 32) {
                this.restart(restartListener)
            }
        }
        document.addEventListener("keydown", restartListener)
        let msg = document.createElement("p");
        msg.innerText = 'Press "SPACE" to restart';
        document.body.append(msg)
    }

    restart(listener){
        document.getElementsByTagName('p')[0].remove();
        document.removeEventListener('keydown', listener)
        delete this
        startGame();
    }

}

function startGame() {
    let gameEngine = new Engine();
    gameEngine.start();
}

startGame();
