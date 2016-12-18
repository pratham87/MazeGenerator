var rows, cols;
var w = 40;
var grid = [];

function setup() {
    createCanvas(400, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];

    this.show = function show() {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y); //top
        }
        if (this.walls[1]) {
            line(x, y, x, y + w); //left
        }
        if (this.walls[2]) {
            line(x, y + w, x + w, y + w); //bottom
        }
        if (this.walls[3]) {
            line(x + w, y + w, x + w, y); //right
        }

        // noFill();
        // rect(x, y, w, w);
    }
}
