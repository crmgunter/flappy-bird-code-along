var bird;
var pipes = []
function setup() {
    createCanvas(400, 600)
    bird = new Bird()
    pipes.push(new Pipe())
}

function draw() {
    background(0)

    pipes.forEach((pipe, i) => {
        pipe.show()
        pipe.update()
        if (pipes[i].hits(bird)) {
            console.log("HIT")
        }
        if (pipe.offscreen()) {
             pipes.shift()
             console.log(pipes.length)
        }
    })

    bird.update()
    bird.show()

    if (frameCount % 40 === 0) {
        pipes.push(new Pipe())
    }
}

function keyPressed() {
    if (key === ' ') {
        bird.up()
    }
}
